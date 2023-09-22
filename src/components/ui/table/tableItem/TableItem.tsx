import { IProduct } from "../../../../models/IProduct";
import ImgLink from "../../imgLink/ImgLink";
import styles from "./TableItem.module.scss";

interface TableItemProps {
  product: IProduct;
}

const TableItem = ({ product }: TableItemProps) => {
  return (
    <tr>
      <td>{product.title}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>{product.rating}</td>
      <td>{product.stock}</td>
      <td>{product.brand}</td>
      <td>{product.category}</td>
      <td className={styles.img}>
        {product.images.map((srcImg, index) => (
          <ImgLink
            src={srcImg}
            alt={product.title}
            key={`__image_${product.title}__${index}`}
          />
        ))}
      </td>
    </tr>
  );
};

export default TableItem;
