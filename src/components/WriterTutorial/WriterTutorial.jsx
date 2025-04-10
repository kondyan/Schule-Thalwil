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
import { useState } from "react";
import {
  selectActiveCategory,
  selectCategories,
} from "../../redux/categories/selectors";
import { clearActiveCategory } from "../../redux/categories/slice";
import { toast } from "sonner";

const WriterTutorial = ({
  _id,
  category,
  title,
  videoUrl,
  description,
  author,
  activeCategoryT,
}) => {
  const categories = useSelector(selectCategories);
  const activeCategory = useSelector(selectActiveCategory);
  let categoryToFind = categories.find(
    (category) => category._id === activeCategory
  );
  categoryToFind = categoryToFind?.name;
  let categoryToFindT = categories.find(
    (category) => category._id === activeCategoryT
  );
  categoryToFindT = categoryToFindT?.name;
  const [openChange, setOpenChange] = useState(false);
  const [stateCategory, setStateCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const dispatch = useDispatch();

  const handleOpenChange = () => {
    setOpenChange(true);
  };

  const handleCloseChange = () => {
    setStateCategory("");
    setCategoryId("");

    setOpenChange(false);
  };

  const handleChange = (e) => {
    setStateCategory(e.target.value);
    setCategoryId(e.explicitOriginalTarget.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(clearActiveCategory());
    handleCloseChange();
    setStateCategory(categoryToFind || categoryToFindT);
    setCategoryId(activeCategory || activeCategoryT);

    const formTitle = form.elements.title.value;
    const formVideoUrl = form.elements.videoUrl.value;
    const formDescription = form.elements.description.value;
    const formCategory = categoryId ? categoryId : category._id;

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
    )
      .unwrap()
      .then(() => {
        toast.success("Tutorial wurde erfolgreich geändert!");
      })
      .catch(() => {
        toast.error(
          "Änderung fehlgeschlagen. Bitte prüfen Sie Anzahl von Zeichen"
        );
      });
  };
  return (
    <li>
      <Grid sx={{ xs: 12, md: 6, lg: 3 }} width={{ xs: 350, md: 400, lg: 346 }}>
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
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "10px",
              paddingBottom: "5px",
              paddingRight: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: { xs: "10px", md: "30px", lg: "14px" },
                py: { xs: "5px", md: "12.5px", lg: "15px" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                size="medium"
                variant="contained"
                onClick={handleOpenChange}
                sx={{
                  backgroundColor: "blue",
                  color: "white",
                  fontSize: { xs: "13px", md: " 14px", lg: "12px" },
                }}
              >
                Tutorial ändern
              </Button>
              <Button
                size="medium"
                variant="contained"
                onClick={() => {
                  dispatch(deleteTutorial(_id))
                    .unwrap()
                    .then(() => {
                      toast.success("Tutorial wurde erfolgreich gelöscht!");
                    })
                    .catch(() => {
                      toast.error(
                        "Löschen fehlgeschlagen. Bitte probieren Sie nochmal"
                      );
                    });
                }}
                sx={{
                  backgroundColor: "red",
                  color: "white",
                  fontSize: { xs: "13px", md: " 14px", lg: "12px" },
                }}
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
                      Ändern Sie das Tutorial
                    </Typography>

                    <TextField
                      sx={{ width: "300px" }}
                      name="category"
                      select
                      required
                      value={
                        stateCategory ||
                        category.name ||
                        categoryToFind ||
                        categoryToFindT
                      }
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
                      placeholder="Max. 27 Zeichen"
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
                      placeholder="Mind. 10 Zeichen"
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
          </Box>
        </Paper>
      </Grid>
    </li>
  );
};

export default WriterTutorial;
