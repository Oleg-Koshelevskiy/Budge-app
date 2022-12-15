import { useState } from "react";
import styles from "./ListType.module.css";
import Button from "./UI/Button";
import Card from "./UI/Card";
import Input from "./UI/Input";
import Select from "./UI/Select";

const ListType = (props) => {
  const [selectedYear, setSelectedYear] = useState();
  const [selectedMonth, setSelectedMonth] = useState();
  const [selectedDateStart, setSelectedDateStart] = useState("");
  const [selectedDateEnd, setSelectedDateEnd] = useState("");

  const selectYearHandler = (event) => {
    event.preventDefault();
    setSelectedYear(event.target.value);
  };

  const sendYearHandler = (event) => {
    event.preventDefault();
    props.getPeriod(`${selectedYear}-01-01`, `${selectedYear}-12-31`);
    setSelectedYear("");
  };

  const selectMonthHandler = (event) => {
    event.preventDefault();
    setSelectedMonth(event.target.value);
  };

  const sendMonthHandler = (event) => {
    event.preventDefault();

    const getLastDayOfMonth = (year, month) => {
      let date = new Date(year, month, 0);
      return date.getDate();
    };

    const dateStart = `${selectedYear}-${selectedMonth}-01`;
    const dateEnd = `${selectedYear}-${selectedMonth}-${getLastDayOfMonth(
      selectedYear,
      selectedMonth
    )}`;

    props.getPeriod(dateStart, dateEnd);
    setSelectedYear("");
    setSelectedMonth("");
  };

  const selectPeriodStartHandler = (event) => {
    setSelectedDateStart(event.target.value);
  };

  const selectPeriodEndHandler = (event) => {
    setSelectedDateEnd(event.target.value);
  };

  const sendPeriodHandler = (event) => {
    event.preventDefault();
    props.getPeriod(selectedDateStart, selectedDateEnd);
    setSelectedDateStart("");
    setSelectedDateEnd("");
  };

  return (
    <Card className={styles.form}>
      <h2 className={styles.header}>Оберіть період</h2>
      <form id="yearForm" onSubmit={sendYearHandler}>
        <label className={styles.label} htmlFor="year-select">
          За рік:
        </label>
        <Select
          onChange={selectYearHandler}
          name="year"
          id="year-select"
          form="yearForm"
          value={selectedYear}
        >
          <option>--Оберіть рік--</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </Select>
        <Button type="submit">Обрати</Button>
      </form>
      <form id="monthForm" onSubmit={sendMonthHandler}>
        <label className={styles.label} htmlFor="month-select">
          За місяць:
        </label>
        <Select
          onChange={selectMonthHandler}
          name="month"
          id="month-select"
          form="monthForm"
          value={selectedMonth}
        >
          <option>--Оберіть місяць--</option>
          <option value="01">січень</option>
          <option value="02">лютий</option>
          <option value="03">березень</option>
          <option value="04">квітень</option>
          <option value="05">травень</option>
          <option value="06">червень</option>
          <option value="07">липень</option>
          <option value="08">серпень</option>
          <option value="09">вересень</option>
          <option value="10">жовтень</option>
          <option value="11">листопад</option>
          <option value="12">грудень</option>
        </Select>
        <Select
          onChange={selectYearHandler}
          name="month-year"
          id="month-select"
          form="monthForm"
          value={selectedYear}
        >
          <option>--Оберіть рік--</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </Select>
        <Button type="submit">Обрати</Button>
      </form>
      <form id="periodForm" onSubmit={sendPeriodHandler}>
        <label className={styles.label} htmlFor="date-start">
          За період з:
        </label>
        <Input
          id="date-start"
          type="date"
          form="periodForm"
          onChange={selectPeriodStartHandler}
          value={selectedDateStart}
        />
        <label className={styles.label} htmlFor="date-end">
          по:
        </label>
        <Input
          id="date-end"
          type="date"
          form="periodForm"
          onChange={selectPeriodEndHandler}
          value={selectedDateEnd}
        />
        <Button type="submit">Обрати</Button>
      </form>
    </Card>
  );
};

export default ListType;
