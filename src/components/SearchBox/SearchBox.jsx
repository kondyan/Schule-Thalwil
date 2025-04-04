import { Box, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setUserFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const value = useSelector((state) => state.filters.status);
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: "50px" }}>
      <TextField
        variant="outlined"
        type="text"
        label="Nach Name suchen"
        value={value}
        sx={{ scale: { xs: "1", md: "1.3", lg: "1.4" } }}
        onChange={(e) => {
          dispatch(setUserFilter(e.target.value));
        }}
      />
    </Box>
  );
};

export default SearchBox;
