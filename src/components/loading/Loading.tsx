import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <div className={[styles.blob, styles.top].join(" ")}></div>
        <div className={[styles.blob, styles.bottom].join(" ")}></div>
        <div className={[styles.blob, styles.left].join(" ")}></div>

        <div className={[styles.blob, styles.move].join(" ")}></div>
      </div>
      Загрузка...
    </div>
  );
};

export default Loading;
