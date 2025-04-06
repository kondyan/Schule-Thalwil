import { Box, Button, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { deleteTutorial } from "../../redux/categories/operations";
import { useRef, useState } from "react";

const WriterTutorial = ({ _id, title, videoUrl, description, author }) => {
  const [openChange, setOpenChange] = useState(false);
  const handleOpenChange = () => setOpenChange(true);
  const handleCloseChange = () => setOpenChange(false);
  const fileInputRef = useRef(null);

  const [isFileOpen, setIsFileOpen] = useState(false);

  const dispatch = useDispatch();

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsFileOpen(true);
      dispatch(uploadImage(file));
    }
  };

  return (
    <li>
      <Grid sx={{ xs: 12, md: 6, lg: 3 }} width={{ xs: 350, md: 400, lg: 350 }}>
        <Paper
          square={false}
          elevation={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Box
            p={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: "600", mx: "auto" }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                height: "120px",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                overflow: "hidden",
              }}
              variant="body"
              component="p"
            >
              {description}
            </Typography>
          </Box>
          <ReactPlayer controls="true" url={videoUrl} width="100%" />
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              dispatch(deleteTutorial(_id));
            }}
            sx={{
              backgroundColor: "red",
              color: "white",
              width: "300px",
              p: "10px",
              my: "20px",
            }}
          >
            Tutorial löschen
          </Button>
        </Paper>
      </Grid>
    </li>
  );
};

export default WriterTutorial;
