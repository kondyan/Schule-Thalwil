import css from "./Category.module.css";

const Category = ({ name }) => {
  return (
    <li>
      <button className={css.button}>{name}</button>
    </li>
  );
};

export default Category;
