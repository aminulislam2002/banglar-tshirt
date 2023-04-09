import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = ({ ring }) => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h1>Aunty</h1>
      <p>Grandpa Money: {money}</p>
      <section className="flex">
        <Cousin>Tutun</Cousin>
        <Cousin hasFriend={true} ring={ring}>
          Ahsan
        </Cousin>
      </section>
    </div>
  );
};

export default Aunty;
