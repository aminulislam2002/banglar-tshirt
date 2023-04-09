import React from "react";
import Cousin from "../Cousin/Cousin";

const Aunty = ({ring}) => {
  return (
    <div>
      <h1>Aunty</h1>
      <section className="flex">
        <Cousin>Tutun</Cousin>
        <Cousin hasFriend={true} ring={ring}>Ahsan</Cousin>
      </section>
    </div>
  );
};

export default Aunty;
