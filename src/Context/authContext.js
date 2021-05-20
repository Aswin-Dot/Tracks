import createContext from './createContext';

const authReducer = (state, action) => {
    switch (action.type) {
        default: return state
    }
}

export const { Context, Provider } = createContext(authReducer, {}, { isSignedIn: false });