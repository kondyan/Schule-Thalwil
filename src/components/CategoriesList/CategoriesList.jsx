import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectIsLoading,
  selectCategories,
  selectActiveCategory,
} from "../../redux/categories/selectors";
import css from "./CategoriesList.module.css";
import { getCategories, getTutorials } from "../../redux/categories/operations";
import Category from "../Category/Category";
import { useNavigate } from "react-router";

const CategoriesList = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);
  const activeCategory = useSelector(selectActiveCategory);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <ul>
      {!isLoading &&
        categories?.map((category) => (
          <Category
            key={category._id}
            name={category.name}
            onClick={() => {
              navigate(activeCategory);
              // dispatch(getTutorials(category._id));
            }}
          />
        ))}
    </ul>
  );
};

export default CategoriesList;
