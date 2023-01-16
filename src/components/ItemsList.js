import React from "react";
import Card from "./UI/Card";
import styles from "./ItemsList.module.css";
import expenseCategories from "../dataArrays/expenseCategories";
import ItemsFilteredByCategory from "./ItemsFilteredByCategory";
import Total from "./Total";

const ItemsList = ({ items, period, filteredItemsByPeriod }) => {
  const headerDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    let month = `${date.getMonth() + 1}`;
    if (month.length < 2) month = `0${month}`;
    let day = `${date.getDate()}`;
    if (day.length < 2) day = `0${day}`;
    return `${day}.${month}.${year}`;
  };

  const categoriesFilteredList = expenseCategories.map((item) => {
    return (
      <ItemsFilteredByCategory
        category={item.category}
        key={item.id}
        categoryName={item.categoryName}
        filteredItemsByPeriod={filteredItemsByPeriod}
      />
    );
  });

  return (
    <Card className={styles.itemsList}>
      <h2>Витрати</h2>
      {period ? (
        <h2>
          Період: з {headerDate(period[0])} по {headerDate(period[1])}
        </h2>
      ) : (
        <h2>Період не задано</h2>
      )}
      <div className={styles.header}>
        <div className={styles.name}>Назва</div>
        <div className={styles.date}>Дата</div>
        <div className={styles.price}>Ціна, грн</div>
        <div className={styles.quantity}>Кількість</div>
        <div className={styles.cost}>Вартість</div>
      </div>
      <ul>{categoriesFilteredList}</ul>
      <Total
        items={items}
        period={period}
        filteredItemsByPeriod={filteredItemsByPeriod}
      />
    </Card>
  );
};

export default ItemsList;
