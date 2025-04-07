import {
  Box,
  Button,
  MenuItem,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTutorial,
  deleteTutorial,
} from "../../redux/categories/operations";
import { useRef, useState } from "react";
import { selectCategories } from "../../redux/categories/selectors";

const WriterTutorial = ({
  _id,
  category,
  title,
  videoUrl,
  description,
  author,
}) => {
  const [openChange, setOpenChange] = useState(false);
  const [stateCategory, setStateCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const handleCloseChange = () => setOpenChange(false);

  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  const handleOpenChange = () => {
    setStateCategory("");
    setCategoryId("");
    setOpenChange(true);
  };

  const handleChange = (e) => {
    setStateCategory(e.target.value);
    setCategoryId(e.explicitOriginalTarget.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    handleCloseChange();

    const formTitle = form.elements.title.value;
    const formVideoUrl = form.elements.videoUrl.value;
    const formDescription = form.elements.description.value;
    const formCategory = categoryId ? categoryId : category._id;

    setStateCategory(formCategory);

    dispatch(
      changeTutorial({
        _id,
        data: {
          category: formCategory,
          title: formTitle,
          videoUrl: formVideoUrl,
          description: formDescription,
        },
      })
    );
  };
  return (
    <li>
      <Grid sx={{ xs: 12, md: 6, lg: 3 }} width={{ xs: 350, md: 400, lg: 350 }}>
        <Paper
          square={false}
          elevation={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Box
            p={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: "600", mx: "auto" }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                height: "120px",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                overflow: "hidden",
                width: { xs: "300px", md: "380px", lg: "300px" },
              }}
              variant="body"
              component="p"
            >
              {description}
            </Typography>
          </Box>
          <ReactPlayer controls="true" url={videoUrl} width="100%" />
          <Box
            sx={{
              display: "flex",
              gap: { xs: "10px", md: "40px", lg: "15px" },
              py: { xs: "5px", md: "12.5px", lg: "15px" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              size="medium"
              variant="contained"
              onClick={handleOpenChange}
              sx={{ backgroundColor: "blue", color: "white" }}
            >
              Tutorial ändern
            </Button>
            <Button
              size="medium"
              variant="contained"
              onClick={() => {
                dispatch(deletePost(_id));
              }}
              sx={{ backgroundColor: "red", color: "white" }}
            >
              Tutorial löschen
            </Button>
          </Box>
          <Modal open={openChange} onClose={handleCloseChange}>
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
                    value={stateCategory ? stateCategory : category.name}
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
                  <TextField
                    fullWidth
                    required
                    defaultValue={title}
                    label="Titel"
                    name="title"
                  />

                  <TextField
                    fullWidth
                    required
                    defaultValue={videoUrl}
                    label="YouTube-Link"
                    name="videoUrl"
                  />

                  <TextField
                    fullWidth
                    required
                    defaultValue={description}
                    label="Beschreibung"
                    name="description"
                    multiline
                    rows={5}
                  />

                  <Button
                    size="large"
                    type="submit"
                    variant="contained"
                    sx={{ backgroundColor: "blue", color: "white" }}
                  >
                    Ändern
                  </Button>
                </Box>
              </form>
            </Box>
          </Modal>
        </Paper>
      </Grid>
    </li>
  );
};

export default WriterTutorial;
