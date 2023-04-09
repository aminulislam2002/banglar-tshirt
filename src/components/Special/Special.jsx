import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = ({ ring }) => {
  const goldenRing = useContext(RingContext);
  return (
    <div>
      <h5>Special</h5>
      <p>{ring}</p>
      <p>{goldenRing}</p>
    </div>
  );
};

export default Special;
