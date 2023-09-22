import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import Label from "../ui/label/Label";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.search}>
      <Label caption="Поиск по названию:">
        <Input type="search" placeholder="Введите название" />
      </Label>
      <Button>Найти</Button>
    </div>
  );
};

export default Search;
