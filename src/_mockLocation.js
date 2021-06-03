import * as location from 'expo-location';

const tenMetersWithDegrees = 0.00001;

const getLocation = (increment) => {
    return {
      timestamp: 10000000,
      coords: {
        speed: 0,
        heading: 0,
        accuracy: 5,
        altitudeAccuracy: 5,
        altitude: 5,
        latitude: 37.33233 + increment * tenMetersWithDegrees,
        longitude: -122.03121 + increment * tenMetersWithDegrees,
      }
    };
};

let counter = 0;
setInterval(() => {
    location.EventEmitter.emit('Expo.locationChanged', {
        watchId: location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter++;
}, 1000)