import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { lazy, Suspense, useEffect, useState, useRef } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import ScrollToTop from "./helpers/scrollToTop";
import { Loader } from "./components/Loader";
import { useSnapshot } from "valtio";
import { PrivateWrapper } from "./helpers/privateWrapper";
import { state } from "./store/state";
import NotFoundPage from "./routes/NotFoundPage";

import Navigation from "./components/Navigation";
import moment from "moment-timezone";
import 'moment/locale/it';
import 'moment/dist/locale/it';
import { AnimatePresence } from "motion/react"
import { actions } from "./store/actions";
import { GestureContainer } from "./components/GestureContainer";
import { deviceHasNotch } from "./helpers/deviceHasNotch";

import Homepage from "./routes/Homepage/Homepage";
import { Header } from "./components/Header";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Footer from "./components/Footer";

export default function App() {
  moment.tz.setDefault("Europe/Rome");
  moment.locale("it");  
 
  const main = useRef<HTMLDivElement>(null);
  const smoother = useRef<ScrollSmoother | null>(null);

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useEffect(() => {
    if (main.current) {
      smoother.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
      });
    }

    // Cleanup function
    return () => {
      if (smoother.current) {
        smoother.current.kill();
      }
    };
  }, []);

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
        <Header />
          <div id="smooth-wrapper" ref={main}>
            <div id="smooth-content">

              
              <Suspense>
                <AnimatePresence mode="wait" initial={false}>
                  <GestureContainer>
                    <Routes>
                      <Route index element={<Homepage />} />
                      <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                  </GestureContainer>
                </AnimatePresence>
              </Suspense>

              
              <ScrollToTop />
              <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="colored"
                transition={Bounce}
                icon={false}
                limit={5}
              />
              {/* <CookieBanner /> */}

              <Footer />

            </div>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}