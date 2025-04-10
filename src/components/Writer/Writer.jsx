import { Box, Button } from "@mui/material";
import { NavLink } from "react-router";

const Writer = () => {
  return (
    <ul>
      <Box
        sx={{
          display: "flex",
          gap: { xs: "20px", md: "80px", lg: "120px" },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          mt: { xs: "60px", md: "80px", lg: "110px" },
          mb: { xs: "50px", md: "70px", lg: "90px" },
        }}
      >
        <li>
          <NavLink to="/writer/posts">
            <Box>
              <Button
                size="large"
                variant="contained"
                sx={{
                  color: "white",
                  scale: { xs: "1", md: "1.4", lg: "1.7" },
                }}
              >
                Artikel
              </Button>
            </Box>
          </NavLink>
        </li>
        <li>
          <NavLink to="/writer/tutorials">
            <Box>
              <Button
                size="large"
                variant="contained"
                sx={{
                  color: "white",
                  scale: { xs: "1", md: "1.4", lg: "1.7" },
                }}
              >
                Tutorials
              </Button>
            </Box>
          </NavLink>
        </li>
      </Box>
    </ul>
  );
};

export default Writer;
