import Input from "../ui/input/Input";
import Label from "../ui/label/Label";
import styles from "./Search.module.scss";

interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ value, onChange }: SearchProps) => {
  return (
    <div className={styles.search}>
      <Label caption="Поиск по названию:">
        <Input
          type="search"
          placeholder="Введите название"
          value={value}
          onChange={onChange}
        />
      </Label>
    </div>
  );
};

export default Search;
