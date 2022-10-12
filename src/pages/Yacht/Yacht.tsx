import React from "react";

import { YACHTS } from "@config/yachts";
import Footer from "@pages/Main/components/Footer/Footer";
import { useParams } from "react-router-dom";

import AlterHeader from "./components/AlterHeader/AlterHeader";
import YachtInfo from "./components/YachtInfo/YachtInfo";
import YachtPhoto from "./components/YachtPhoto/YachtPhoto";

const Yacht: React.FC = () => {
  const { id } = useParams();

  const yacht = YACHTS.find((yacht) => String(yacht.id) === id);

  return (
    <>
      <AlterHeader />
      <YachtPhoto yacht={yacht} />
      <YachtInfo yacht={yacht} />
      <Footer />
    </>
  );
};

export default Yacht;
