import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategory,
  getCategories,
} from "../../redux/categories/operations";
import { selectCategories } from "../../redux/categories/selectors";
import AdminCategory from "../AdminCategory/AdminCategory";

const AdminCategories = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);

  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    handleCloseCreate();

    const name = form.elements.category.value;
    dispatch(createCategory({ name }));
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <Box>
      <Button
        onClick={handleOpenCreate}
        variant="contained"
        sx={{ backgroundColor: "green", color: "white" }}
      >
        Kategorie erstellen
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

      <ul>
        {categories?.map((category) => (
          <AdminCategory
            key={category._id}
            _id={category._id}
            name={category.name}
          />
        ))}
      </ul>
    </Box>
  );
};

export default AdminCategories;
