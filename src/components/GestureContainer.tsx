import { useGesture } from '@use-gesture/react';
import { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const routes = ['/', '/services', '/garages'];

export const GestureContainer: React.FC<Props> = ({ children }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentRouteIndex = () => {
    return routes.indexOf(location.pathname);
  };

  useGesture(
    {
      onDrag: ({ movement: [mx], direction: [xDir], distance }) => {
        if (distance > 50) {
          const currentIndex = getCurrentRouteIndex();
          
          if (xDir > 0) { // Swipe verso sinistra (indietro)
            const prevRoute = routes[currentIndex - 1];
            if (prevRoute) {
              navigate(prevRoute);
            }
          } else if (xDir < 0) { // Swipe verso destra (avanti)
            const nextRoute = routes[currentIndex + 1];
            if (nextRoute) {
              navigate(nextRoute);
            }
          }
        }
      },
    },
    {
      target: elementRef,
      drag: {
        threshold: 10,
        filterTaps: true,
      },
    }
  );

  return (
    <div ref={elementRef} style={{ touchAction: 'pan-y' }} className="gesture-container">
      {children}
    </div>
  );
}; 