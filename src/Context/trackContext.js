import createContext from './createContext';

const trackReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const fetchTrackData = (dispatch) => () => {}

const createTrackData = (dispatch) => (name, locations) => {
    console.log(name, locations.length)
}

export const { Context, Provider } = createContext(
    trackReducer,
    {fetchTrackData, createTrackData},
    []
)