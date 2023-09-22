import styles from "./Label.module.scss";

interface LabelProps {
  caption: string;
  children: React.ReactNode;
}

const Label = ({ caption, children }: LabelProps) => {
  return (
    <label className={styles.label}>
      {caption}
      {children}
    </label>
  );
};

export default Label;
