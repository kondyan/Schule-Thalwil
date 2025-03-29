import { Avatar, Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import css from "./ArticlePageComponent.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPost,
  selectCurrentPostIsRefreshing,
} from "../../redux/articles/selectors";
import { getPostById } from "../../redux/articles/operations";
import { useEffect } from "react";
import { useParams } from "react-router";

const ArticlePageComponent = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const post = useSelector(selectCurrentPost);
  const isRefreshing = useSelector(selectCurrentPostIsRefreshing);

  useEffect(() => {
    dispatch(getPostById(params.id));
  }, [dispatch, params.id]);

  const { _id, title, imageUrl, content, author, updatedAt } = post;

  const publishDate = updatedAt
    .split("T", 1)
    .toString()
    .split("-")
    .reverse()
    .toString()
    .replaceAll(",", ".");

  return (
    <Paper
      elevation={10}
      sx={{
        width: { xs: "330px", md: "600px", lg: "1000px" },
        mx: "auto",
        my: "30px",
      }}
    >
      {!isRefreshing && (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pl: { xs: "5px", md: "15px", lg: "20px" },
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              align="center"
              sx={{
                fontWeight: "700",
                fontSize: { xs: "36px", md: "48px", lg: "64px" },
                py: { xs: "7px", md: "15px", lg: "20px" },
              }}
            >
              {title}
            </Typography>

            <Box>
              <img
                className={css.img}
                src={imageUrl}
                alt={title}
                width="100%"
              />
            </Box>
            <Typography
              variant="h6"
              component="h2"
              sx={{
                fontWeight: "600",
                fontSize: { xs: "32px", md: "42px", lg: "54px" },
              }}
            >
              Beschreibung:
            </Typography>
            <Typography
              variant="paragraph"
              component="p"
              align="center"
              sx={{
                width: { xs: "350px", md: "600px", lg: "1000px" },
                px: { xs: "50px", md: "80px", lg: "100px" },
                py: { xs: "20px", md: "30px", lg: "35px" },
                fontSize: { xs: "16px", md: "24px", lg: "32px" },
                fontWeight: "400",
              }}
            >
              {content}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              py: { xs: "10px", md: "15px", lg: "20px" },
            }}
          >
            {author && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: { xs: "160px", md: "300px", lg: "500px" },
                  gap: { xs: "10px", md: "20px", lg: "25px" },
                  pl: { xs: "10px", md: "15px", lg: "25px" },
                }}
              >
                <Avatar sx={{ scale: { xs: "1", md: "1.3", lg: "1.5" } }}>
                  {author.avatar}
                </Avatar>
                <Typography
                  variant="subtitle2"
                  component="span"
                  overflow="hidden"
                  align="left"
                  sx={{ fontSize: { xs: "16px", md: "24px", lg: "36px" } }}
                >
                  {author.name} {author.secondName}
                </Typography>
              </Box>
            )}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                pr: { xs: "5px", md: "15px", lg: "20px" },
              }}
            >
              <Typography
                variant="subtitle2"
                component="p"
                sx={{
                  fontSize: { xs: "14px", md: "20px", lg: "32px" },
                  pr: { xs: "5px", md: "10px", lg: "15px" },
                }}
              >
                Publiziert am
              </Typography>
              <Typography
                variant="caption"
                component="span"
                sx={{
                  fontSize: { xs: "12px", md: "16px", lg: "24px" },
                  pt: "2px",
                }}
              >
                {publishDate}
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </Paper>
  );
};

export default ArticlePageComponent;
