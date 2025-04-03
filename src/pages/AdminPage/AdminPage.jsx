import { Container } from "@mui/material";
import UsersList from "../../components/UsersList/UsersList";
import SearchBox from "../../components/SearchBox/SearchBox";

const AdminPage = () => {
  return (
    <Container fixed>
      <SearchBox />
      <UsersList />
    </Container>
  );
};

export default AdminPage;
