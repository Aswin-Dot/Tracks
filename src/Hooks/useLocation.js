import { useState, useEffect } from 'react';
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

export default (shouldTrack, callback) => {

  const [error, setError] = useState(null);

  useEffect(() => {

    let subscriber;

    const startWatching = async () => {
      try {
        const { granted } = await requestForegroundPermissionsAsync();
        if (!granted) {
          setError("Location permission not granted");
          return;
        }

        subscriber = await watchPositionAsync(
          //returns a function called subscriber, which can be used to control it's function.
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback
          // (location) => callback(location) //location prop from expo-location
        );
      } catch (err) {
        setError(err);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
        if(subscriber){
          subscriber.remove();
        }
      subscriber = null;
    }

    return () => {
      if(subscriber){
        subscriber.remove()
      }
    }
  }, [shouldTrack, callback]);

  return [error]
  
}
