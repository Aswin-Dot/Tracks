import createContext from './createContext';
import trackerApi from "../API/tracker";

const trackReducer = (state, action) => {
    switch (action.type) {
        case "get_tracks":
            return action.payload
        default:
            return state
    }
}

const fetchTrackData = (dispatch) => async () => {
    try {
      const response = await trackerApi.get("/tracks");
      dispatch({ type: "get_tracks", payload: response.data })
    } catch (e) {
      console.log(error.message);
    }
}

const createTrackData = (dispatch) => async (name, locations) => {
    try {
        await trackerApi.post('/tracks', {name, locations});
    } catch (e) {
        console.log(error.message)
    }
}

export const { Context, Provider } = createContext(
    trackReducer,
    {fetchTrackData, createTrackData},
    []
)