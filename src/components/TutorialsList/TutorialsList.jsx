import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectTutorials } from "../../redux/categories/selectors";
import Tutorial from "../Tutorial/Tutorial";
import { getTutorials } from "../../redux/categories/operations";

const TutorialsList = () => {
  const dispatch = useDispatch();
  const tutorials = useSelector(selectTutorials);

  const { category } = useParams();

  useEffect(() => {
    dispatch(getTutorials(category));
  }, [dispatch, category]);

  return (
    <ul>
      {tutorials.map((tutorial) => (
        <Tutorial
          key={tutorial._id}
          title={tutorial.title}
          description={tutorial.description}
          videoUrl={tutorial.videoUrl}
        />
      ))}
    </ul>
  );
};

export default TutorialsList;
