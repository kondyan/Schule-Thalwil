import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  selectIsLoading,
  selectCategories,
} from "../../redux/categories/selectors";
import css from "./CategoriesList.module.css";

const TutorialsList = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch();
    console.log("useEffect tutorials list");
  }, [dispatch]);
  return (
    <ul>
      {!isLoading &&
        categories?.map((category) => (
          <Article
            key={tutorial._id}
            title={post.title}
            imageUrl={post.imageUrl}
            content={post.content}
            author={post.author}
          />
        ))}
    </ul>
  );
};

export default TutorialsList;
