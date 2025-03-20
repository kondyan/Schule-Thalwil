import css from "./Article.module.css";
import { NavLink } from "react-router-dom";

const Article = ({ title, imageUrl, content, author }) => {
  return (
    <li>
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} />
      <p>{content}</p>
      <div>
        <img src={author.avatar} alt={author.username} />
        <span>{author.username}</span>
      </div>
    </li>
  );
};

export default Article;
