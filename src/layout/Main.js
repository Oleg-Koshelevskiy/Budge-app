import { useState } from "react";
import CostLimits from "../components/CostLimits";
import itemsArray from "../dataArrays/itemsArray";
import ItemForm from "../components/ItemForm";
import ItemsList from "../components/ItemsList";
import ListType from "../components/ListType";
import Total from "../components/Total";

const Main = () => {
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
    <main>
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
    </main>
  );
};

export default Main;
