import { state } from '../store/state';
import { getReverseGeocoding } from '../api/getReverseGeocoding';
import { actions } from '../store/actions';

export const reverseGeocoding = async (lat: string, lng: string) => {

  try {
    state.session.position.loading = true;

    if (lat && lng) {      
      const response = await getReverseGeocoding(lat, lng);

      await actions.setPosition({
        latitude: lat,
        longitude: lng,
        address: response
      }); 
      
      return response;
      
    } else {
      console.log("Impossibile recuperare la posizione");
      return null;
    }

  } catch (err) {
    console.error(err);
  } finally {
    state.session.position.loading = false;
    
  }
};

