import { Box, Button } from "@mui/material";
import css from "./Category.module.css";

const Category = ({ name, onClick }) => {
  return (
    <li>
      <Box sx={{ textAlign: "center", mx: "auto" }}>
        <Button
          size="large"
          onClick={() => {
            onClick();
            //
          }}
          sx={{ fontSize: "20px" }}
        >
          {name}
        </Button>
      </Box>
    </li>
  );
};

export default Category;
