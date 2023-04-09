import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h1>Uncle</h1>
      <p>Granpa Money: {money}</p>
      <button onClick={() => setMoney(money + 1000)}>Send 1000tk</button>
      <section className="flex">
        <Cousin>Miraj</Cousin>
        <Cousin>Meme</Cousin>
      </section>
    </div>
  );
};

export default Uncle;
