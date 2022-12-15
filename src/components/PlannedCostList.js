import styles from "./CostLimits.module.css";
import Input from "./UI/Input";

const PlannedCostList = (props) => {
  const plannedList = props.limitState.map((item, id) => {
    const currentLimit = item.limit;
    const category = item.category;

    const plannedCostForPeriod =
      Math.round(
        (currentLimit / props.plannedPeriod[0]) * props.currentPeriod * 100
      ) / 100;

    const filteredItems = props.filteredItemsByPeriod.filter(
      (item) => item.category === category
    );
    const filteredItemsCost = filteredItems.map((item) => {
      return item.price * item.quantity;
    });
    const totalPriceByPeriod =
      Math.round(filteredItemsCost.reduce((prev, cur) => prev + cur, 0) * 100) /
      100;
    let percentage;
    if (!totalPriceByPeriod || !plannedCostForPeriod) {
      percentage = "- -";
    } else {
      percentage = Math.round(
        (totalPriceByPeriod / plannedCostForPeriod) * 100
      );
    }

    let background;
    if (percentage < 80) {
      background = styles.green;
    }
    if (percentage >= 80 && percentage <= 100) {
      background = styles.yellow;
    }
    if (percentage > 100) {
      background = styles.red;
    }
    const available =
      Math.round((plannedCostForPeriod - totalPriceByPeriod) * 100) / 100;

    return (
      <div key={item.id} className={styles.item}>
        <div className={styles.name}>{item.categoryName}</div>
        <Input
          min="0"
          readOnly={props.blockInputs}
          type="number"
          value={currentLimit}
          onChange={props.setLimitHandler(id)}
        />
        <div className={styles.value}>{plannedCostForPeriod}</div>
        <div className={styles.value}>{totalPriceByPeriod}</div>
        <div className={styles.avail}>{available}</div>
        <div className={`${styles.last} ${background}`}>{percentage} %</div>
      </div>
    );
  });

  return plannedList;
};

export default PlannedCostList;
