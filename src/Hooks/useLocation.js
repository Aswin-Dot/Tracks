import { useState, useEffect } from 'react';
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

export default (shouldTrack, callback) => {

  const [error, setError] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        setError("Location permission not granted");
        return;
      }
      const sub = await watchPositionAsync( //returns a function called subscriber, which can be used to control it's function.
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
        // (location) => callback(location) //location prop from expo-location
      );
      setSubscriber(sub);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
      if(shouldTrack){
        startWatching();
      } else {
        subscriber.remove();
        setSubscriber(null);
      }
  }, [shouldTrack]);

  return [error]
  
}
