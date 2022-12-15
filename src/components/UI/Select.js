import styles from "./Select.module.css";

const Select = (props) => {
  return (
    <select
      onChange={props.onChange}
      className={`${styles.select} ${props.className}`}
      name={props.name}
      id={props.id}
      form={props.form}
      value={props.value}
    >
      {props.children}
    </select>
  );
};

export default Select;
