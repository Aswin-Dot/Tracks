import { useContext } from 'react';

import { Context as locationContext } from '../Context/locationContext';
import { Context as trackContext } from '../Context/trackContext';

import { navigate } from "../navigationRef";

export default () => {

    const {state: {name, locations}, reset} = useContext(locationContext);
    const { createTrackData } = useContext(trackContext);

    const saveTrackData = async () => {
        await createTrackData(name, locations);
        reset();
        navigate("TrackList")
    }

    return [saveTrackData];
} 