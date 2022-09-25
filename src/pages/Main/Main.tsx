import React from "react";

import { useLocation } from "react-router-dom";

import AboutUs from "./components/AboutUs/AboutUs";
import Reservation from "./components/Reservation/Reservation";
import TopBackground from "./components/TopBackground/TopBackground";

const Main: React.FC = () => {
  let { hash } = useLocation();

  React.useEffect(() => {
    if (hash !== "") {
      // Push onto callback queue so it runs after the DOM is updated,
      // this is required when navigating from a different page so that
      // the element is rendered on the page before trying to getElementById.
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [hash]);

  return (
    <div>
      <TopBackground />
      <AboutUs />
      <Reservation />
    </div>
  );
};

export default Main;
