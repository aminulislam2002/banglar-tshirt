import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Brother = () => {
  const goldenRing = useContext(RingContext);
  return (
    <div>
      <h5>Brother</h5>
      <p>{goldenRing}</p>
    </div>
  );
};

export default Brother;
