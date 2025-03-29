import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectTutorials } from "../../redux/categories/selectors";
import Tutorial from "../Tutorial/Tutorial";
import { getTutorials } from "../../redux/categories/operations";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";

const TutorialsList = () => {
  const dispatch = useDispatch();
  const tutorials = useSelector(selectTutorials);
  const { category } = useParams();

  useEffect(() => {
    dispatch(getTutorials(category));
  }, [dispatch, category]);

  return (
    <>
      {!tutorials.length && (
        <Typography variant="h4" component="h4" align="center">
          Es sind noch keine Tutorials zu diesem Fach publiziert
        </Typography>
      )}
      <ul>
        <Grid
          spacing={6}
          container
          display="flex"
          alignItems="flex-start"
          justifyContent={{
            xs: "center",
            lg: "flex-start",
          }}
        >
          {tutorials.map((tutorial) => (
            <Tutorial
              key={tutorial._id}
              title={tutorial.title}
              description={tutorial.description}
              videoUrl={tutorial.videoUrl}
            />
          ))}
        </Grid>
      </ul>
    </>
  );
};

export default TutorialsList;
