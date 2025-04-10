import { Box, Button, Paper, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../redux/categories/operations";
import { toast } from "sonner";

const AdminCategory = ({ _id, name }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <Paper
        elevation={10}
        sx={{
          width: { xs: "350px", md: "400px", lg: "360px" },
          p: { xs: "10px", md: "15px", lg: "20px" },
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: { xs: "10px", md: "15px", lg: "20px" },
        }}
      >
        <Typography variant="h5" component="p" sx={{ fontWeight: "600" }}>
          {name}
        </Typography>
        <Button
          onClick={() =>
            dispatch(deleteCategory(_id))
              .unwrap()
              .then(() => {
                toast.success("Kategorie wurde erfolgreich gelöscht!");
              })
              .catch(() => {
                toast.error(
                  "Die Kategorie kann nicht gelöscht werden, da sie bereits Tutorials enthält"
                );
              })
          }
          variant="contained"
          sx={{
            backgroundColor: "red",
            color: "white",
            width: { xs: "200px", md: "250px", lg: "300px" },
          }}
        >
          Kategorie löschen
        </Button>
      </Paper>
    </li>
  );
};

export default AdminCategory;
