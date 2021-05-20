import React from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { ThemeProvider } from 'react-native-elements'

import AccountScreen from './src/Screens/AccountScreen';
import SigninScreen from './src/Screens/SigninScreen';
import SignupScreen from './src/Screens/SignupScreen';
import TrackListScreen from './src/Screens/TrackListScreen';
import TrackDetailScreen from './src/Screens/TrackDetailScreen';
import TrackCreateScreen from './src/Screens/TrackCreateScreen'

import { Provider as AuthProvider } from "./src/Context/authContext";

const SwitchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    Account: AccountScreen,
    TrackCreate: TrackCreateScreen,
  }),
});

const App = createAppContainer(SwitchNavigator);

export default () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  );
}