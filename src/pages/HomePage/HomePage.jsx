import ArticlesList from "../../components/ArticlesList/ArticlesList";
import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.container}>
        <h1 className={css.title}>Schule Thalwil</h1>
        <ArticlesList />
      </div>
    </>
  );
};

export default HomePage;
