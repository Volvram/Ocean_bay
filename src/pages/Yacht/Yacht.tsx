import React from "react";

import { Link, useParams } from "react-router-dom";

const Yacht: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      Это страница с яхтой id: {id}
      <Link to={`/`}>
        <div>Вернуться</div>
      </Link>
    </div>
  );
};

export default Yacht;
