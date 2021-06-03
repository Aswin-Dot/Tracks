import AsyncStorage from "@react-native-async-storage/async-storage";
import createContext from "./createContext";
import trackerApi from "../API/tracker";

import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "sign_in":
      return { errorMessage: "", token: action.payload };
    case 'sign_out':
      return { errorMessage: "", token: null };
    case 'clear_error': 
      return { ...state, errorMessage: ""}
    default:
      return state;
  }
};

const signIn = (dispatch) => {
  return async (email, password) => {
    try {
      const response = await trackerApi.post("/signin", email, password);
      console.log(response.data);
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "sign_in",
        payload: response.data.token,
      });

      navigate("mainFlow");
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: "add_error",
        payload: "Something went wrong during the signin process!!",
      });
    }
  };
};

const signUp = (dispatch) => {
  return async (email, password) => {
    try {
      const response = await trackerApi.post("/signup", email, password);
      console.log(response.data);
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "sign_in",
        payload: response.data.token,
      });

      navigate("mainFlow");
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: "add_error",
        payload: "Something went wrong during the signup process!!",
      });
    }
  };
};

const signOut = (dispatch) => async() => {
  try {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'sign_out' })
    navigate('loginFlow')
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'error logging out! Please try again.'})
  }
};

const autoSignin = (dispatch) => async() => {
  try{
    const token = await AsyncStorage.getItem("token");
    if(token) {
      dispatch({
        type: 'sign_in',
        payload: token})
      navigate('mainFlow')
    } else {
      navigate("loginFlow");
    }
  }catch(err) {
    dispatch({
      type: 'add_error',
      payload: 'error logging in! Please try again.'})
  }
}

const clearError = (dispatch) => {
  return () => {
    dispatch({
      type: 'clear_error'})
  }
}

export const { Context, Provider } = createContext(
  authReducer,
  { signIn, signUp, signOut, autoSignin, clearError },
  { token: "", errorMessage: "" }
);
