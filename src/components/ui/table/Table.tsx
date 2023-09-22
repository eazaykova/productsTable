import { cellTitle } from "../../../data/cellTitle.data";
import { IProduct } from "../../../models/IProduct";
import styles from "./Table.module.scss";
import TableItem from "./tableItem/TableItem";

interface TableProps {
  products: IProduct[];
}

const Table = ({ products }: TableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th></th>
          {cellTitle.map((title) => (
            <th key={`__key_${title}`}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <TableItem product={product} key={product.id} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
