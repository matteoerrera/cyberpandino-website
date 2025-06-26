import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';


export const deviceAddNotification = async (
  title: string,
  body: string,
  id: number,
  date: Date,
  route: string,
  service?: any
) => {
  if (Capacitor.getPlatform() === 'web') {
    return;
  }

  const permission = await LocalNotifications.requestPermissions();

  if (permission.display === "granted") {
    await LocalNotifications.schedule({
      notifications: [
        {
          title,
          body,
          id,
          schedule: { at: date}, 
          extra: {
            route: route,
            serviceId: service ? service.id : null
          },
        },
      ],
    });
    console.log("Promemoria inviato:", {title, body, id, date})
  }
};

