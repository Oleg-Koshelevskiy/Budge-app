import ItemForm from "./components/ItemForm";
import styles from "./App.module.css";
import Container from "./components/UI/Container";
import ItemsList from "./components/ItemsList";
import { useState } from "react";
import Total from "./components/Total";
import itemsArray from "./components/dataArrays/itemsArray";
import ListType from "./components/ListType";
import CostLimits from "./components/CostLimits";
import CategoriesController from "./components/CategoriesController";

function App() {
  const [items, setItems] = useState(itemsArray);
  const [period, setPeriod] = useState();

  const periodHandler = (start, end) => {
    setPeriod([Date.parse(start), Date.parse(end)]);
  };

  let filteredItemsByPeriod;
  if (period) {
    filteredItemsByPeriod = items.filter(
      (item) => item.date >= period[0] && item.date <= period[1]
    );
  } else filteredItemsByPeriod = items;

  const itemAddHandler = (item) => {
    console.log(item);
    setItems((prevItems) => {
      return [
        ...prevItems,
        {
          id: Math.random(),
          name: item.name,
          date: Date.parse(item.date),
          quantity: item.quantity,
          price: item.price,
          type: item.form,
          category: item.category,
        },
      ];
    });
  };

  return (
    <Container>
      <h2 className={styles.header}>Бюджет</h2>
      <CategoriesController />
      <ItemForm onChangeItems={itemAddHandler} />
      <ListType getPeriod={periodHandler} />
      <CostLimits
        period={period}
        filteredItemsByPeriod={filteredItemsByPeriod}
      />
      {items.length > 0 && (
        <ItemsList
          items={items}
          period={period}
          filteredItemsByPeriod={filteredItemsByPeriod}
        />
      )}
      {items.length > 0 && (
        <Total
          items={items}
          period={period}
          filteredItemsByPeriod={filteredItemsByPeriod}
        />
      )}
    </Container>
  );
}

export default App;
