import { createRoot } from 'react-dom/client'
import { SkeletonTheme } from 'react-loading-skeleton';

import './i18n';
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/free-mode';
import './App.scss'

import App from './App';



window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);


const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <SkeletonTheme baseColor="#E7E9F3" highlightColor="#fff">
      <App />
    </SkeletonTheme>
  );
}
