import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';


export const deviceDeleteNotification = async (id: number) => {
  if (Capacitor.getPlatform() === 'web') {
    return;
  }

  await LocalNotifications.cancel({
    notifications: [{ id }],
  });

  console.log("Notifica eliminata", id);
};

