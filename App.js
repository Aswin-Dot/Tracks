import React from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { ThemeProvider } from 'react-native-elements'
import { SafeAreaProvider } from "react-native-safe-area-context";

import AccountScreen from './src/Screens/AccountScreen';
import SigninScreen from './src/Screens/SigninScreen';
import SignupScreen from './src/Screens/SignupScreen';
import TrackListScreen from './src/Screens/TrackListScreen';
import TrackDetailScreen from './src/Screens/TrackDetailScreen';
import TrackCreateScreen from './src/Screens/TrackCreateScreen';
import SplashScreen from './src/Screens/SplashScreen';

import { Provider as AuthProvider } from "./src/Context/authContext";
import { Provider as LocationProvider } from "./src/Context/locationContext";
import { Provider as TracksProvider } from "./src/Context/locationContext";
import { setNavigator } from './src/navigationRef';

const SwitchNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(SwitchNavigator);

export default () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <TracksProvider>
            <LocationProvider>
              <App ref={(navigator) => setNavigator(navigator)} />
            </LocationProvider>
          </TracksProvider>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}