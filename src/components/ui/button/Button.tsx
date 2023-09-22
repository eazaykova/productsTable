import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  square?: boolean;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, square, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={[
        styles.button,
        square ? styles["button_square"] : "",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
