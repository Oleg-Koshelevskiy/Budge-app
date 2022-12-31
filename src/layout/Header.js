import { useState } from "react";
import CategoriesController from "../components/CategoriesController";
import TotalBalance from "../components/TotalBalance";
import Button from "../components/UI/Button";
import styles from "./Header.module.css";

const Header = () => {
  const [showOptions, setShowOptions] = useState(false);

  const optionsHandler = () => {
    setShowOptions((state) => !state);
  };
  return (
    <header>
      <div className={styles.topHeader}>
        <h2 className={styles.logo}>Бюджет</h2>
        <Button>Задати план на період</Button>
        <Button>Показати план/факт</Button>
        <Button onClick={optionsHandler}>Налаштування</Button>
        <Button>Увійти/вийти</Button>
      </div>
      {showOptions && <TotalBalance />}
      {showOptions && <CategoriesController />}
    </header>
  );
};

export default Header;
