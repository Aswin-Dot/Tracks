import AsyncStorage from "@react-native-async-storage/async-storage";
import createContext from "./createContext";
import trackerApi from "../API/tracker";

import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "sign_up":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const signIn = (dispatch) => {
  return async (email, password) => {
    try {
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong during the signup process!!",
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
        type: "sign_up",
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
const signOut = (dispatch) => {
  return () => {};
};

export const { Context, Provider } = createContext(
  authReducer,
  { signIn, signUp, signOut },
  { token: "", errorMessage: "" }
);
