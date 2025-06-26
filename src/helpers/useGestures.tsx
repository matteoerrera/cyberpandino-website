import { App } from '@capacitor/app';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useGestures = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let subscription: any;

    const setupListener = async () => {
      subscription = await App.addListener('backButton', ({ canGoBack }) => {
        if (canGoBack) {
          navigate(-1);
        } else {
          App.exitApp();
        }
      });
    };

    setupListener();

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [navigate]);
}; 