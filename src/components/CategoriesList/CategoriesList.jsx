import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectIsLoading,
  selectCategories,
  selectActiveCategory,
} from "../../redux/categories/selectors";
import { getCategories } from "../../redux/categories/operations";
import Category from "../Category/Category";
import { useNavigate } from "react-router";
import { Box } from "@mui/material";

const CategoriesList = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

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
        {!isLoading &&
          categories?.map((category) => (
            <Category
              key={category._id}
              name={category.name}
              onClick={() => {
                navigate(category._id);
              }}
            />
          ))}
      </Box>
    </ul>
  );
};

export default CategoriesList;
