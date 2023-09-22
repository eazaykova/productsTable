import Button from "../button/Button";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  arrayPages: number[];
  pageCurrent: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ arrayPages, pageCurrent, setPage }: PaginationProps) => {
  return (
    <div className={styles.pagination}>
      {arrayPages.map((page) => (
        <Button
          key={`__pagination__${page}`}
          className={page === pageCurrent ? styles.pageCurrent : ""}
          onClick={() => setPage(page)}
        >
          {page}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
