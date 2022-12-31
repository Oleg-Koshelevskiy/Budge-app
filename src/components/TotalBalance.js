import { useState } from "react";
import Button from "./UI/Button";
import Card from "./UI/Card";
import Input from "./UI/Input";

const TotalBalance = () => {
  const [balance, setBalance] = useState("");

  //   const ref = useRef()

  const totalBalanceHandler = (e) => {
    e.preventDefault();
    setBalance(e.target.value);
  };

  return (
    <Card>
      <h2>Баланс: {balance || 0} грн</h2>
      <form onSubmit={totalBalanceHandler}>
        <Input value={balance} type="number" onChange={totalBalanceHandler} />
        <Button type="submit">Встановити</Button>
      </form>
    </Card>
  );
};

export default TotalBalance;
