import React from "react";

import { useLocation } from "react-router-dom";

import AboutUs from "./components/AboutUs/AboutUs";
import Assortment from "./components/Assortment/Assortment";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import PhoneBack from "./components/PhoneBack/PhoneBack";
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
        // eslint-disable-next-line no-restricted-globals
        history.replaceState("", document.title, window.location.pathname);
        hash = "";
      }, 0);
    }
  }, [hash]);

  return (
    <>
      <TopBackground />
      <AboutUs />
      <Reservation />
      <Assortment />
      <Contacts />
      <PhoneBack />
      <Footer />
    </>
  );
};

export default Main;
