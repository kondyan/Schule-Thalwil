import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategory,
  getCategories,
} from "../../redux/categories/operations";
import { selectCategories } from "../../redux/categories/selectors";
import AdminCategory from "../AdminCategory/AdminCategory";
import { toast } from "sonner";

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
    dispatch(createCategory({ name }))
      .unwrap()
      .then(() => {
        toast.success("Kategorie wurde erfolgreich erstellt!");
      })
      .catch(() => {
        toast.error(
          "Kategorie kann nicht erstellt werden, prüfen Sie die Anzahl von Zeichen"
        );
      });
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <Box
      sx={{
        mt: { xs: "40px", md: "50px", lg: "60px" },
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Button
        onClick={handleOpenCreate}
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "green",
          color: "white",
          mb: { xs: "30px", md: "40px", lg: "50px" },
          scale: { xs: "1", md: "1.2", lg: "1.4" },
        }}
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
            width: { xs: "340px", md: "450px", lg: "500px" },
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
              <Typography
                variant="h6"
                component="div"
                sx={{ fontSize: { xs: "18px", md: "24px", lg: "28px" } }}
              >
                Erstelle eine Neue Fachkategorie
              </Typography>
              <TextField
                required
                label="Kategorie Name"
                name="category"
                placeholder="Max. 20 Zeichen"
                sx={{ scale: { xs: "1", md: "1.2", lg: "1.4" } }}
              />
              <Button
                size="large"
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "green",
                  color: "white",
                  scale: { xs: "1", md: "1.2", lg: "1.3" },
                }}
              >
                Erstellen
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>

      <ul>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            justifyContent: { xs: "center", md: "flex-start" },
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {categories?.map((category) => (
            <AdminCategory
              key={category._id}
              _id={category._id}
              name={category.name}
            />
          ))}
        </Box>
      </ul>
    </Box>
  );
};

export default AdminCategories;
