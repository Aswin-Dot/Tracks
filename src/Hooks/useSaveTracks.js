import { useContext } from 'react';

import { Context as locationContext } from '../Context/locationContext';
import { Context as trackContext } from '../Context/trackContext';

export default () => {

    const {state: {name, locations}} = useContext(locationContext);
    const { createTrackData } = useContext(trackContext);

    const saveTrackData = () =>{
        return createTrackData(name, locations)
    }

    return {saveTrackData}
} 