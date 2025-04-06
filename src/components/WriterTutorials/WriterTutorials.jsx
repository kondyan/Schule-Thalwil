import {
  Box,
  Button,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createTutorial,
  getCategories,
  getTutorialsByUserId,
} from "../../redux/categories/operations";
import { selectTutorialsByUserId } from "../../redux/auth/selectors";
import { selectCategories } from "../../redux/categories/selectors";
import WriterTutorial from "../WriterTutorial/WriterTutorial";
import Grid from "@mui/material/Grid2";

const WriterTutorials = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);

  const dispatch = useDispatch();
  const tutorials = useSelector(selectTutorialsByUserId);
  const categories = useSelector(selectCategories);

  const handleChange = (e) => {
    setCategory(e.target.value);
    setCategoryId(e.explicitOriginalTarget.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    handleCloseCreate();

    const title = form.elements.title.value;
    const videoUrl = form.elements.videoUrl.value;
    const description = form.elements.description.value;

    dispatch(
      createTutorial({ category: categoryId, title, videoUrl, description })
    );
  };

  useEffect(() => {
    dispatch(getTutorialsByUserId());
    dispatch(getCategories());
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: { xs: "35px", md: "50px", lg: "60px" },
      }}
    >
      <Button
        onClick={handleOpenCreate}
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "green",
          color: "white",
          scale: { md: "1.2", lg: "1.4" },
        }}
      >
        Tutorial erstellen
      </Button>

      <Modal open={openCreate} onClose={handleCloseCreate}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "370px", md: "450px", lg: "550px" },
            bgcolor: "background.paper",
            border: "1px solid #000",
            borderRadius: "5px",
            boxShadow: 24,
            p: 4,
          }}
        >
          <form onSubmit={handleSubmit} autoComplete="off">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Typography variant="h5" component="h2">
                Erstellen Sie ein Tutorial
              </Typography>

              <TextField
                sx={{ width: "300px" }}
                name="category"
                select
                required
                value={category}
                onChange={handleChange}
                variant="outlined"
                label="Kategorie"
              >
                {categories?.map((category) => (
                  <MenuItem
                    key={category._id}
                    id={category._id}
                    value={category.name}
                  >
                    {category.name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField fullWidth required label="Titel" name="title" />

              <TextField
                fullWidth
                required
                label="YouTube-Link"
                name="videoUrl"
              />

              <TextField
                fullWidth
                required
                label="Beschreibung"
                name="description"
                multiline
                rows={5}
              />

              <Button
                size="large"
                type="submit"
                variant="contained"
                sx={{ backgroundColor: "green", color: "white" }}
              >
                Erstellen
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
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
          {tutorials?.map((tutorial) => (
            <WriterTutorial
              key={tutorial._id}
              _id={tutorial._id}
              title={tutorial.title}
              videoUrl={tutorial.videoUrl}
              description={tutorial.description}
              author={tutorial.author}
            />
          ))}
        </Grid>
      </ul>
    </Box>
  );
};

export default WriterTutorials;
