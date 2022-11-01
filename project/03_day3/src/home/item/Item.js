import React from "react";

import { useParams } from "react-router-dom"

const Item = () => {
  const params = useParams();


  return <div>{params?.id}</div>;
};

export default Item;
