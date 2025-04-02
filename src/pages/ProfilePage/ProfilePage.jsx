import { Container } from "@mui/material";
import DocumentTitle from "../../components/DocumentTitle";
import Profile from "../../components/Profile/Profile";
import css from "./ProfilePage.module.css";

const ProfilePage = () => {
  return (
    <Container fixed>
      <DocumentTitle>Profil</DocumentTitle>
      <Profile />
    </Container>
  );
};

export default ProfilePage;
