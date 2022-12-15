import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      type={props.type || "text"}
      id={props.id}
      onChange={props.onChange}
      disabled={props.disabled}
      className={`${styles.input} ${props.className}`}
      value={props.value}
      step={props.step}
      min={props.min}
      max={props.max}
      readOnly={props.readOnly}
    >
      {props.children}
    </input>
  );
};

export default Input;
