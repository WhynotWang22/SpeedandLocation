import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
export async function requestLocationPermission() {
    if (Platform.OS === 'ios') {
      // Geolocation.requestAuthorization('whenInUse');
      Geolocation.requestAuthorization();
    }
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,          
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // console.log('Location permission granted.');
        }
      } catch (error) {
        // console.log('Error requesting location permission:', error);
      }
    }
  }