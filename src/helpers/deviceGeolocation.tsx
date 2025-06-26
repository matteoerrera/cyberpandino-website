import { Geolocation } from '@capacitor/geolocation';
import { Capacitor } from '@capacitor/core';
import { toast } from 'react-toastify';
import { state } from '../store/state';
import { actions } from '../store/actions';
import { reverseGeocoding } from './reverseGeocoding';

export const useDeviceGeolocation = async () => {
  let currentLocation = {
    latitude: 0,
    longitude: 0,
    address: null
  };

  try {
    state.session.position.loading = true;

    if (Capacitor.getPlatform() === 'web') {
      // Usa l'API nativa del browser
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      
      currentLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        address: null
      };
      
    } else {
      // Usa Capacitor per dispositivi mobili
      const permissionStatus = await Geolocation.checkPermissions();
      if (permissionStatus.location !== 'granted') {
        const requestResult = await Geolocation.requestPermissions();
        if (requestResult.location !== 'granted') {
          throw new Error('Permessi di geolocalizzazione negati');
        }
      }

      const position = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
        maximumAge: 60000,
      });
      currentLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        address: null
      };
    }

    if (!state.session.position.polling) {
      actions.startPositionPolling();
    }

  } catch (err) {
    console.error(err);
    actions.stopPositionPolling();
    toast.error('Impossibile recuperare la posizione');
  } finally {
    state.session.position.loading = false;
    if (currentLocation.latitude && currentLocation.longitude) {
      state.session.position.data = currentLocation;
      localStorage.setItem('position', JSON.stringify(currentLocation));
    }
    return currentLocation;
  }
};

