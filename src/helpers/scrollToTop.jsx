import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    document.documentElement.style.setProperty('--scroll-y', `0`);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant'  // 'auto' disabilita l'animazione
    });
  }, [pathname]);

  return null;
} 