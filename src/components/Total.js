import React from "react";
import styles from "./Total.module.css";
import Card from "./UI/Card";

const Total = ({ items, period, filteredItemsByPeriod }) => {

let totalPriceArray
if (period) totalPriceArray = filteredItemsByPeriod.map((item) => {
  return item.price * item.quantity;
});

 if(!period) totalPriceArray = items.map((item) => {
    return item.price * item.quantity;
  });

  const totalPrice = totalPriceArray.reduce((prev, cur) => prev + cur, 0);

  return (
    <Card className={styles.total}>
      <div className={styles.text}>Загальна вартість:</div>
      <div className={styles.sum}>{totalPrice} грн</div>
    </Card>
  );
};

export default Total;
