import React from "react";

import { YACHTS } from "@config/yachts";
import { Link, useParams } from "react-router-dom";

import AlterHeader from "./components/AlterHeader/AlterHeader";

const Yacht: React.FC = () => {
  const { id } = useParams();

  const currentYacht = YACHTS.find((yacht) => String(yacht.id) === id);

  return (
    <div>
      <AlterHeader />
      Это страница с яхтой id: {id}
      <Link to={`/`}>
        <div>Вернуться</div>
      </Link>
    </div>
  );
};

export default Yacht;
