import React, { useContext, useReducer } from "react";
import Button from "./UI/Button";
import Card from "./UI/Card";
import styles from "./ItemForm.module.css";
import Input from "./UI/Input";
import Select from "./UI/Select";
import BudgetContext from "../store/budget-context";

const initialItem = {
  name: "",
  date: "",
  quantity: "",
  price: "",
  form: "",
  category: "",
};

const itemReducer = (state, action) => {
  if (action.type === "ADD") return state;

  if (action.type === "NAME") {
    return {
      ...state,
      name: action.name,
    };
  }
  if (action.type === "DATE") {
    return {
      ...state,
      date: action.date,
    };
  }
  if (action.type === "QUANTITY") {
    return {
      ...state,
      quantity: action.quantity,
    };
  }
  if (action.type === "PRICE") {
    return {
      ...state,
      price: action.price,
    };
  }
  if (action.type === "FORM") {
    return {
      ...state,
      form: action.form,
    };
  }
  if (action.type === "CATEGORY") {
    return {
      ...state,
      category: action.category,
    };
  }
  if (action.type === "REMOVE") {
    return {
      name: "",
      date: "",
      quantity: "",
      price: "",
      form: "",
      category: "",
    };
  }
};

const ItemForm = (props) => {
  const [itemState, dispatchItem] = useReducer(itemReducer, initialItem);

  const context = useContext(BudgetContext);

  const sendFormHandler = (event) => {
    event.preventDefault();

    if (
      !itemState.name ||
      itemState.price <= 0 ||
      !itemState.price ||
      !itemState.date ||
      !itemState.quantity ||
      !itemState.form ||
      !itemState.category
    )
      return;

    dispatchItem({
      type: "ADD",
      name: itemState.name,
      date: itemState.date,
      quantity: itemState.quantity,
      price: itemState.price,
      form: itemState.form,
      category: itemState.category,
    });

    props.onChangeItems(itemState);
    dispatchItem({
      type: "REMOVE",
      name: "",
      date: "",
      quantity: "",
      price: "",
      form: "",
      category: "",
    });
  };

  const itemNameChangeHandler = (event) => {
    dispatchItem({ type: "NAME", name: event.target.value });
  };

  const itemDateChangeHandler = (event) => {
    dispatchItem({ type: "DATE", date: event.target.value });
  };

  const itemQuantityChangeHandler = (event) => {
    dispatchItem({ type: "QUANTITY", quantity: event.target.value });
  };

  const itemPriceChangeHandler = (event) => {
    dispatchItem({ type: "PRICE", price: event.target.value });
  };

  const itemTypeChangeHandler = (event) => {
    dispatchItem({ type: "FORM", form: event.target.value });
  };

  const itemCategoryChangeHandler = (event) => {
    dispatchItem({ type: "CATEGORY", category: event.target.value });
  };

  const optionsList = context.expenseCategories.map((item) => {
    return (
      <option key={item.id} value={item.category}>
        {item.categoryName}
      </option>
    );
  });

  return (
    <Card>
      <h2 className={styles.header}>Додати</h2>
      <form onSubmit={sendFormHandler} className={styles.form} id="itemForm">
        <div>
          <label className={styles.label} htmlFor="item">
            Назва
          </label>
          <Input
            className={styles.input__name}
            id="item"
            type="text"
            onChange={itemNameChangeHandler}
            value={itemState.name}
          />
        </div>
        {itemState.name && (
          <div>
            <label className={styles.label} htmlFor="date">
              Дата
            </label>
            <Input
              className={styles.input__name}
              id="date"
              type="date"
              onChange={itemDateChangeHandler}
              value={itemState.date}
            />
          </div>
        )}

        {itemState.date && (
          <div>
            <label className={styles.label} htmlFor="quantity">
              Кількість
            </label>
            <Input
              className={styles.input__quantity}
              id="quantity"
              type="number"
              step="1"
              min="1"
              max="99"
              onChange={itemQuantityChangeHandler}
              value={itemState.quantity}
            />
          </div>
        )}
        {itemState.quantity && (
          <div>
            <label className={styles.label} htmlFor="price">
              Ціна, $
            </label>
            <Input
              className={styles.input__price}
              id="price"
              type="number"
              step="0.01"
              min="0.01"
              max="99999999"
              onChange={itemPriceChangeHandler}
              value={itemState.price}
            />
          </div>
        )}
        {itemState.price && (
          <div>
            <label className={styles.label} htmlFor="type-select">
              Тип витрат:
            </label>
            <Select
              onChange={itemTypeChangeHandler}
              name="type"
              id="type-select"
              form="itemForm"
              value={itemState.form}
            >
              <option>--Оберіть тип витрат--</option>
              <option value="regular">Регулярні</option>
              <option value="unregular">Нерегулярні</option>
            </Select>
          </div>
        )}
        {itemState.form && (
          <div>
            <label className={styles.label} htmlFor="category-select">
              Категорія:
            </label>
            <Select
              onChange={itemCategoryChangeHandler}
              name="category"
              id="category-select"
              form="itemForm"
              value={itemState.category}
            >
              <option>--Оберіть категорію--</option>
              {optionsList}
            </Select>
          </div>
        )}
        {itemState.category && <Button type="submit">Додати</Button>}
      </form>
    </Card>
  );
};

export default ItemForm;
