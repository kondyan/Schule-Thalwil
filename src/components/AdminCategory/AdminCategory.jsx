import { Box, Button, Paper, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../redux/categories/operations";

const AdminCategory = ({ _id, name }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <Paper>
        <Typography variant="h5" component="p">
          {name}
        </Typography>
        <Button
          onClick={() => dispatch(deleteCategory(_id))}
          variant="contained"
          sx={{ backgroundColor: "red", color: "white" }}
        >
          Kategorie löschen
        </Button>
      </Paper>
    </li>
  );
};

export default AdminCategory;
