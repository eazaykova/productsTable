import { IOption } from "../../../models/IOption";
import styles from "./Sorting.module.scss";

interface SortingProps {
  options: IOption[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Sorting = ({ options, value, onChange }: SortingProps) => {
  return (
    <div>
      <select value={value} onChange={onChange} className={styles.select}>
        <option disabled value="">
          Сортировка по
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sorting;
