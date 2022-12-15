import Card from "./UI/Card";
import styles from "./CostLimits.module.css";
import { useContext, useState } from "react";
import Button from "./UI/Button";
import PlannedPeriodChoser from "./PlannedPeriodChoser";
import BudgetContext from "../store/budget-context";
import PlannedCostList from "./PlannedCostList";

const CostLimits = ({ period, filteredItemsByPeriod }) => {
  const context = useContext(BudgetContext);
  const [showList, setShowList] = useState(true);
  const [showPeriod, setShowPeriod] = useState(false);
  const [limitState, setLimitState] = useState(
    context.expenseCategories.map((item) => {
      return {
        id: item.id,
        category: item.category,
        categoryName: item.categoryName,
        limit: "",
      };
    })
  );
  const [plannedPeriod, setPlannedPeriod] = useState([30, "Місячний"]);
  const [blockInputs, setBlockInputs] = useState(true);

  const showListHandler = () => {
    setShowList((prev) => !prev);
  };

  const showPeriodHandler = () => {
    setShowPeriod(true);
    setBlockInputs(false);
  };
  const hidePeriodHandler = () => {
    setShowPeriod(false);
  };

  const changePlannedPeriodHandler = (periodValue, periodName) => {
    setPlannedPeriod([periodValue, periodName]);
  };

  const blockInputsHandler = () => {
    setBlockInputs(true);
  };

  const setLimitHandler = (id) => (event) => {
    const newLimits = limitState.map((item, itemId) => {
      if (id !== itemId) return item;
      return { ...item, limit: event.target.value };
    });
    setLimitState(newLimits);
  };

  const day = 86400000;
  let currentPeriod = 1;
  if (period) {
    currentPeriod = (period[1] - period[0]) / day + 1;
  }

  const totalAmount = limitState
    .map((item) => +item.limit)
    .reduce((prev, cur) => prev + cur, 0);

  return (
    <Card className={styles.limits}>
      <h2>
        Плановий ліміт витрат:{" "}
        {Math.round((totalAmount / plannedPeriod[0]) * currentPeriod * 100) /
          100}{" "}
        грн, період {currentPeriod} дн.
        <span>
          <Button onClick={showListHandler}>
            {showList ? "Сховати" : "Показати"}
          </Button>
        </span>
      </h2>
      <h3>
        {plannedPeriod[1]} ліміт (кількість днів - {plannedPeriod[0]} ){" "}
        {totalAmount} грн
        <Button onClick={showPeriodHandler}>Змінити</Button>
      </h3>
      {showList ? (
        <div className={styles.header}>
          <div className={styles.name}>Категорія</div>
          <div className={styles.plansum}>Сума</div>
          <div className={styles.value}>Період, грн</div>
          <div className={styles.value}>Фактично, грн</div>
          <div className={styles.avail}>Доступно, грн</div>
          <div>% до плану</div>
        </div>
      ) : null}
      {showPeriod ? (
        <PlannedPeriodChoser
          onHidePeriod={hidePeriodHandler}
          onChangePeriod={changePlannedPeriodHandler}
          onBlockInputs={blockInputsHandler}
        />
      ) : null}
      {showList ? (
        <PlannedCostList
          limitState={limitState}
          plannedPeriod={plannedPeriod}
          currentPeriod={currentPeriod}
          filteredItemsByPeriod={filteredItemsByPeriod}
          blockInputs={blockInputs}
          setLimitHandler={setLimitHandler}
        />
      ) : null}
    </Card>
  );
};

export default CostLimits;
