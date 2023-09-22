import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  square?: boolean;
}

const Button = ({ children, square }: ButtonProps) => {
  return (
    <button
      className={[styles.button, square ? styles["button_square"] : ""].join(
        " "
      )}
    >
      {children}
    </button>
  );
};

export default Button;
