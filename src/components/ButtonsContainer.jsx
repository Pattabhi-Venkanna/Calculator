import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonCLick }) => {
  const buttonNames = [
    "1",
    "2",
    "3",
    "C",
    "4",
    "5",
    "6",
    "+",
    "7",
    "8",
    "9",
    "-",
    ".",
    "0",
    "/",
    "*",
    "=",
    "←",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((name) => (
        <button
          className={name === "=" ? styles.equalbutton : styles.button}
          key={name}
          onClick={(event) => onButtonCLick(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;

// {buttonNames.map((name) => (
//     <button className={styles.button}>{name}</button>
// ))}
