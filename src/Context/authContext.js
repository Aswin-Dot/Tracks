import createContext from './createContext';
import trackerApi from '../API/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return  {...state, errorMessage: action.payload}
        default: return state
    }
}

const signIn = (dispatch) => {
    return async (email, password) => {
        try{
            const response = await trackerApi.post("/signup", { email, password });
            console.log(response.data)
        } catch (err) {
            dispatch({type: 'add_error', payload: 'Something went wrong during the signup process!!'})
        }
    }
}
const signUp = (dispatch) => {
    return async (email, password) => {
      try {
        const response = await trackerApi.post("/signup", { email, password });
        console.log(response.data);
      } catch (err) {
        dispatch({
          type: "add_error",
          payload: "Something went wrong during the signup process!!",
        });
      }
    };
}
const signOut = (dispatch) => {
    return () => {

    }
}

export const { Context, Provider } = createContext(
    authReducer, 
    { signIn, signUp, signOut }, 
    { isSignedIn: false, errorMessage: '' }
);