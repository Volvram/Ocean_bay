import React from "react";

import { YACHTS } from "@config/db/yachts";
import Footer from "@pages/Main/components/Footer/Footer";
import { useParams } from "react-router-dom";

import AlterHeader from "./components/AlterHeader/AlterHeader";
import YachtDescription from "./components/YachtDescription/YachtDescription";
import YachtInfo from "./components/YachtInfo/YachtInfo";
import YachtVideo from "./components/YachtVideo/YachtVideo";

const Yacht: React.FC = () => {
  const { id } = useParams();

  const yacht = YACHTS.find((yacht) => String(yacht.id) === id);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AlterHeader />
      <YachtVideo yacht={yacht} />
      <YachtInfo yacht={yacht} />
      <YachtDescription yacht={yacht} />
      <Footer />
    </>
  );
};

export default Yacht;
