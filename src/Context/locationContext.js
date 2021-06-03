import createContext from './createContext';

const locationReducer = (state, actions) => {
    switch(actions.type) {
        case "add_current_location":
            return {...state, currentLocation: actions.payload}
        default: return state;
    }
}

const startRecording = (dispatch) => () => {};
const stopRecording = (dispatch) => () => {};
const addLocation = (dispatch) => (location) => {
    dispatch({ type: 'add_current_location', payload: location })
};

export const { Context, Provider } = createContext(
    locationReducer,
    {startRecording, stopRecording, addLocation},
    {recording: false, location: [], currentLocation: null}
); 