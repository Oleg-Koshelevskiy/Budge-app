import React from "react";
import styles from "./Item.module.css";

const Item = ({ item }) => {
  const itemCost = Math.round(+item.price * +item.quantity * 100) / 100;

  const date = new Date(item.date);
  const year = date.getFullYear();
  let month = `${date.getMonth() + 1}`;
  if (month.length < 2) month = `0${month}`;
  let day = `${date.getDate()}`;
  if (day.length < 2) day = `0${day}`;

  return (
    <li className={styles.item}>
      <div className={styles.name}>{item.name}</div>
      <div className={styles.date}>
        {day}.{month}.{year}
      </div>
      <div className={styles.price}>{item.price}</div>
      <div className={styles.amount}>{item.quantity}</div>
      <div className={styles.cost}>{itemCost}</div>
    </li>
  );
};

export default Item;
