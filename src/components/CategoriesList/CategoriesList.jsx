import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectIsLoading,
  selectCategories,
} from "../../redux/categories/selectors";
import css from "./CategoriesList.module.css";
import { getCategories } from "../../redux/categories/operations";
import Category from "../Category/Category";

const CategoriesList = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCategories());
    console.log("useEffect categories list");
  }, [dispatch]);
  return (
    <ul>
      {!isLoading &&
        categories?.map((category) => (
          <Category key={category._id} name={category.name} />
        ))}
    </ul>
  );
};

export default CategoriesList;
