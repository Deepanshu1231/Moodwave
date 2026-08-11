import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { Transition } from "framer-motion";
import PlaylistSelector from "./components/PlaylistSelector";
import PlayerPage from "./components/PlayerPage";

const routeTransition: Transition = {
  duration: 0.5,
  ease: "easeInOut",
};

const routeMotion = {
  initial: {
    opacity: 0,
    scale: 1.015,
    filter: "brightness(0.82)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "brightness(1)",
  },
  exit: {
    opacity: 0,
    scale: 0.985,
    filter: "brightness(0.58)",
  },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={routeMotion.initial}
              animate={routeMotion.animate}
              exit={routeMotion.exit}
              transition={routeTransition}
            >
              <PlaylistSelector />
            </motion.div>
          }
        />
        <Route
          path="/player/:category/:id"
          element={
            <motion.div
              initial={routeMotion.initial}
              animate={routeMotion.animate}
              exit={routeMotion.exit}
              transition={routeTransition}
            >
              <PlayerPage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
