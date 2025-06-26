import { Device } from '@capacitor/device';
import { SafeArea } from 'capacitor-plugin-safe-area';
import { state } from '../store/state';



export const deviceHasNotch = async () => {
  try {
   /*  const info = await Device.getInfo();
    
    // Su iOS
    if (info.platform === 'ios') {
      // I modelli con notch iniziano dall'iPhone X
      const modelli_con_notch = [
        'iPhone X', 'iPhone XS', 'iPhone XS Max', 'iPhone XR',
        'iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max',
        'iPhone 12', 'iPhone 12 Mini', 'iPhone 12 Pro', 'iPhone 12 Pro Max',
        'iPhone 13', 'iPhone 13 Mini', 'iPhone 13 Pro', 'iPhone 13 Pro Max',
        'iPhone 14', 'iPhone 14 Plus', 'iPhone 14 Pro', 'iPhone 14 Pro Max',
        'iPhone 15', 'iPhone 15 Plus', 'iPhone 15 Pro', 'iPhone 15 Pro Max'
      ];
      
      const haNotch = modelli_con_notch.some(model => 
        info.model.includes(model)
      );
      
      console.log('Il dispositivo ha un notch:', haNotch);
      return haNotch;
    }
    
    // Su Android
    if (info.platform === 'android') {
      // Su Android possiamo controllare la presenza di display cutout
      // attraverso CSS o JavaScript
      const haNotch = window.innerHeight > window.screen.height;
      console.log('Il dispositivo probabilmente ha un notch:', haNotch);
      return haNotch;
    }
    
    return false; */

    let hasNotch = false;

    const insets = await SafeArea.getSafeAreaInsets();
  
    // Ad esempio, se top > 20, molto probabile che ci sia un notch
    /* hasNotch = insets.top > 20;
    console.log('Il dispositivo ha un notch:', hasNotch); */



    /* await SafeArea.getSafeAreaInsets().then(({ insets }) => {
      console.log("///insets", insets);
    }); */
    
    await SafeArea.getStatusBarHeight().then(({ statusBarHeight }) => {
      //console.log("///statusBarHeight", statusBarHeight);
      hasNotch = statusBarHeight > 20;
      //console.log('Il dispositivo ha un notch:', hasNotch);
      
    });

    state.app.hasNotch = hasNotch;


    return hasNotch;
  } catch (error) {
    console.error('Errore nel controllo del notch:', error);
    return false;
  }
};

