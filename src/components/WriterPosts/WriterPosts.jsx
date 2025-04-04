import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import UploadIcon from "@mui/icons-material/Upload";
import { useDispatch, useSelector } from "react-redux";
import { selectPreviewImage } from "../../redux/articles/selectors";
import {
  createPost,
  getPostsByUserId,
  uploadImage,
} from "../../redux/articles/operations";
import { selectPostsByUserId } from "../../redux/auth/selectors";
import Grid from "@mui/material/Grid2";
import WriterPost from "../WriterPost/WriterPost";

const WriterPosts = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);
  const fileInputRef = useRef(null);

  const [isFileOpen, setIsFileOpen] = useState(false);

  const dispatch = useDispatch();
  const image = useSelector(selectPreviewImage);
  const posts = useSelector(selectPostsByUserId);

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

    handleCloseCreate();

    const title = form.elements.title.value;
    const content = form.elements.content.value;
    const imageUrl = form.elements.imageUrl.nextSibling.firstChild.currentSrc;

    dispatch(createPost({ title, imageUrl, content }));
  };

  useEffect(() => {
    dispatch(getPostsByUserId());
  }, []);

  return (
    <Box>
      <Button
        onClick={handleOpenCreate}
        variant="contained"
        sx={{ backgroundColor: "green", color: "white" }}
      >
        Artikel erstellen
      </Button>

      <Modal open={openCreate} onClose={handleCloseCreate}>
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
                gap: "30px",
              }}
            >
              <Typography variant="h6" component="h2">
                Erstellen Sie einen Artikel
              </Typography>
              <TextField fullWidth required label="Titel" name="title" />

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
                    required
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
                      <img src={image} alt="" width="300px" />
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
                rows={10}
              />

              <Button
                size="large"
                type="submit"
                variant="contained"
                sx={{ backgroundColor: "green", color: "white" }}
              >
                Erstellen
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
      <ul>
        <Grid
          spacing={4}
          container
          display="flex"
          alignItems="flex-start"
          justifyContent={{
            xs: "center",
            md: "flex-start",
          }}
        >
          {posts?.map((post) => (
            <WriterPost
              key={post._id}
              id={post._id}
              title={post.title}
              imageUrl={post.imageUrl}
              content={post.content}
              author={post.author}
            />
          ))}
        </Grid>
      </ul>
    </Box>
  );
};

export default WriterPosts;
