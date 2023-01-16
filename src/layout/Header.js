import { useState } from "react";
import CategoriesController from "../components/CategoriesController";
import TotalBalance from "../components/TotalBalance";
import Button from "../components/UI/Button";
import styles from "./Header.module.css";
import Container from "../components/UI/Container";
import pig from "../assets/savings.png";
const Header = () => {
  const [showOptions, setShowOptions] = useState(false);

  const optionsHandler = () => {
    setShowOptions((state) => !state);
  };
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.topHeader}>
          <div>
            <img src={pig} alt="savings pig" />
          </div>
          <h2 className={styles.logo}>Бюджет</h2>
          <Button>Задати план на період</Button>
          <Button>Показати план/факт</Button>
          <Button onClick={optionsHandler}>Налаштування</Button>
          <Button>Увійти/вийти</Button>
        </div>
        {showOptions && <TotalBalance />}
        {showOptions && <CategoriesController />}
      </Container>
    </header>
  );
};

export default Header;
