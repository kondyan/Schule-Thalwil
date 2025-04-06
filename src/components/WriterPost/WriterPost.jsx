import {
  Avatar,
  Box,
  Button,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import css from "./WriterPost.module.css";
import { Link } from "react-router";
import { Launch } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  changePost,
  deletePost,
  getPostById,
  uploadImage,
} from "../../redux/articles/operations";
import { useEffect, useRef, useState } from "react";
import UploadIcon from "@mui/icons-material/Upload";
import {
  selectCurrentPost,
  selectPreviewImage,
} from "../../redux/articles/selectors";
import { clearPreviewImage } from "../../redux/articles/slice";

const WriterPost = ({ _id, title, imageUrl, content, author }) => {
  const dispatch = useDispatch();
  const image = useSelector(selectPreviewImage);
  const handleCloseChange = () => setOpenChange(false);
  const fileInputRef = useRef(null);
  const [isFileOpen, setIsFileOpen] = useState(true);

  const [openChange, setOpenChange] = useState(false);
  const handleOpenChange = () => {
    dispatch(clearPreviewImage());
    setIsFileOpen(true);
    setOpenChange(true);
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    handleCloseChange();

    const title = form.elements.title.value;
    const content = form.elements.content.value;
    const imageUrl = form.elements.imageUrl.nextSibling.firstChild.currentSrc
      ? form.elements.imageUrl.nextSibling.firstChild.currentSrc
      : imageUrl;

    dispatch(changePost({ _id, data: { title, imageUrl, content } }));
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
            gap: "8px",
          }}
        >
          <img src={imageUrl} alt={title} className={css.img} />
          <Box
            paddingX={1.5}
            sx={{
              display: "flex",
              alignItems: "baseline",
              flexDirection: "column",
              gap: "6px",
              height: 80,

              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <Typography variant="h5" component="h2" textOverflow="ellipsis">
              {title}
            </Typography>
            <Typography variant="body2" component="p">
              {content}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "10px",
              paddingBottom: "5px",
              paddingRight: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: { xs: "10px", md: "40px", lg: "15px" },
                py: { xs: "5px", md: "12.5px", lg: "15px" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                size="medium"
                variant="contained"
                onClick={handleOpenChange}
                sx={{ backgroundColor: "blue", color: "white" }}
              >
                Artikel ändern
              </Button>
              <Button
                size="medium"
                variant="contained"
                onClick={() => {
                  dispatch(deletePost(_id));
                }}
                sx={{ backgroundColor: "red", color: "white" }}
              >
                Artikel löschen
              </Button>
            </Box>
            <Modal open={openChange} onClose={handleCloseChange}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: { xs: "370px", md: "450px", lg: "550px" },
                  bgcolor: "background.paper",
                  border: "1px solid #000",
                  borderRadius: "5px",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <form onSubmit={handleSubmit} autoComplete="off">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: { xs: "15px", md: "25px", lg: "35px" },
                    }}
                  >
                    <Typography variant="h5" component="h2">
                      Erstellen Sie einen Artikel
                    </Typography>
                    <TextField
                      fullWidth
                      required
                      label="Titel"
                      name="title"
                      defaultValue={title}
                    />

                    <Button
                      disableRipple
                      color="black"
                      sx={{
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "primary.main",
                          boxShadow: "none",
                        },
                        "&.Mui-focusVisible": {
                          backgroundColor: "transparent",
                          boxShadow: "none",
                        },
                        "&.Mui-active": {
                          backgroundColor: "transparent",
                          boxShadow: "none",
                        },
                      }}
                      onClick={openFileInput}
                    >
                      <Box
                        sx={{
                          width: { xs: "304px", md: "384px", lg: "484px" },
                          p: "50px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: " center",
                          flexDirection: "column",
                          cursor: "pointer",
                          borderRadius: "5px",
                          border: " 2px dashed #afafaf",
                        }}
                      >
                        <input
                          type="file"
                          hidden
                          accept="image/*"
                          name="imageUrl"
                          onChange={handleImageChange}
                          ref={fileInputRef}
                        />
                        {isFileOpen && (
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              width: { xs: "304px", md: "384px", lg: "484px" },
                              height: "180px",
                            }}
                          >
                            <img
                              src={image ? image : imageUrl}
                              alt=""
                              width="300px"
                            />
                          </Box>
                        )}
                        {!isFileOpen && (
                          <>
                            <UploadIcon />
                            <Typography mt={2} variant="body1" component="p">
                              Wählen sie ein Foto
                            </Typography>
                          </>
                        )}
                      </Box>
                    </Button>

                    <TextField
                      fullWidth
                      required
                      label="Beschreibung"
                      name="content"
                      multiline
                      rows={5}
                      defaultValue={content}
                    />

                    <Button
                      size="large"
                      type="submit"
                      variant="contained"
                      sx={{ backgroundColor: "blue", color: "white" }}
                    >
                      Ändern
                    </Button>
                  </Box>
                </form>
              </Box>
            </Modal>
          </Box>
        </Paper>
      </Grid>
    </li>
  );
};

export default WriterPost;
