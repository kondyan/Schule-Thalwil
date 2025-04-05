import { Box, Button } from "@mui/material";
import { NavLink } from "react-router";

const Writer = () => {
  return (
    <ul>
      <Box
        sx={{
          display: "flex",
          gap: { xs: "20px", md: "25px", lg: "40px" },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          flexWrap: "wrap",
          my: { xs: "60px", md: "80px", lg: "110px" },
        }}
      >
        <li>
          <NavLink to="/writer/posts">
            <Box>
              <Button>Artikel</Button>
            </Box>
          </NavLink>
        </li>
        <li>
          <NavLink to="/writer/tutorials">
            <Box>
              <Button>Tutorials</Button>
            </Box>
          </NavLink>
        </li>
      </Box>
    </ul>
  );
};

export default Writer;
