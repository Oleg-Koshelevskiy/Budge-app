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
          <div className={styles.logo}>
            <img src={pig} alt="savings pig" />
            <h2 className={styles.logoHeader}>Бюджет</h2>
          </div>

          <div className={styles.menu}>
            <Button>Основні цілі</Button>
            <Button>Дашборд</Button>
            <Button>Планувати період</Button>
            <Button onClick={optionsHandler}>Налаштування</Button>
            <Button>Вийти</Button>
          </div>
        </div>
        {showOptions && <TotalBalance />}
        {showOptions && <CategoriesController />}
      </Container>
    </header>
  );
};

export default Header;
