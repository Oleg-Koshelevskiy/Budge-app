import { useState } from "react";
import Button from "./UI/Button";
import Select from "./UI/Select";

const PlannedPeriodChoser = ({
  onHidePeriod,
  onChangePeriod,
  onBlockInputs,
}) => {
  const [selectedValue, setSelectedValue] = useState();

  const valueHandler = (event) => {
    setSelectedValue(event.target.value);
  };

  let periodName;
  if (selectedValue === "1") {
    periodName = "Денний";
  }
  if (selectedValue === "7") {
    periodName = "Тижневий";
  }
  if (selectedValue === "30") {
    periodName = "Місячний";
  }
  if (selectedValue === "91") {
    periodName = "Сезонний";
  }
  if (selectedValue === "365") {
    periodName = "Річний";
  }

  const periodHandler = (event) => {
    event.preventDefault();
    console.log(selectedValue);
    if (!selectedValue) return;
    else {
      onChangePeriod(+selectedValue, periodName);
      onBlockInputs();
      onHidePeriod();
    }
  };

  return (
    <form id="periodForm" onSubmit={periodHandler}>
      <Select onChange={valueHandler} form="periodForm" value={selectedValue}>
        <option>--Оберіть період--</option>
        <option value="1">День</option>
        <option value="7">Тиждень</option>
        <option value="30">Місяць</option>
        <option value="91">Сезон</option>
        <option value="365">Рік</option>
      </Select>
      <Button type="submit">Обрати</Button>
    </form>
  );
};

export default PlannedPeriodChoser;
