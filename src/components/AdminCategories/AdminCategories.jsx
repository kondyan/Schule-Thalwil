import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../redux/categories/operations";

const WriterCategories = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const categoryName = form.elements.category.value;
    dispatch(createCategory(categoryName));
  };

  return (
    <Box>
      <Button
        onClick={handleOpenCreate}
        variant="contained"
        sx={{ backgroundColor: "green", color: "white" }}
      >
        Kategorie erstellen
      </Button>
      <Button
        onClick={handleOpenDelete}
        variant="contained"
        sx={{ backgroundColor: "red", color: "white" }}
      >
        Kategorie löschen
      </Button>
      <Modal open={openCreate} onClose={handleCloseCreate}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
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
              <Typography variant="h6" component="div">
                Erstelle eine Neue Fachkategorie
              </Typography>
              <TextField required label="Kategorie Name" name="category" />
              <Button
                variant="contained"
                sx={{ backgroundColor: "green", color: "white" }}
              >
                Erstellen
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>

      <Modal open={openDelete} onClose={handleCloseDelete}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        ></Box>
      </Modal>
      <ul>
        <Box>
          <Typography variant="h3" component="h2">
            Meine Kategorien
          </Typography>
          {categories?.map((category) => {
            <li>
              <Box>
                <Typography>{category.name}</Typography>
              </Box>
            </li>;
          })}
        </Box>
      </ul>
    </Box>
  );
};

export default WriterCategories;
