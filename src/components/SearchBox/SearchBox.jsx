import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setUserFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const value = useSelector((state) => state.filters.status);
  const dispatch = useDispatch();

  return (
    <TextField
      variant="standard"
      type="text"
      value={value}
      onChange={(e) => {
        dispatch(setUserFilter(e.target.value));
      }}
    />
  );
};

export default SearchBox;
