import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsLoading, selectPosts } from "../../redux/articles/selectors";
import Article from "../Article/Article";
import css from "./ArticlesList.module.css";
import { getPosts } from "../../redux/articles/operations";

const ArticlesList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getPosts());
    console.log("useEffect articles list");
  }, [dispatch]);
  return (
    <ul>
      {!isLoading &&
        posts?.map((post) => (
          <Article
            key={post._id}
            title={post.title}
            imageUrl={post.imageUrl}
            content={post.content}
            author={post.author}
          />
        ))}
    </ul>
  );
};

export default ArticlesList;
