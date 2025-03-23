import css from "./Category.module.css";

const Category = ({ name, onClick }) => {
  return (
    <li>
      <button className={css.button} onClick={onClick}>
        {name}
      </button>
    </li>
  );
};

export default Category;
