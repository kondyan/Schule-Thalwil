import { Route, Routes } from "react-router";
import Layout from "./Layout";
import { lazy, useEffect } from "react";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { refreshUser } from "../redux/auth/operations";
import TutorialsList from "./TutorialsList/TutorialsList";
import { Box, CircularProgress } from "@mui/material";
import WriterPosts from "./WriterPosts/WriterPosts";
import WriterTutorials from "./WriterTutorials/WriterTutorials";
import { Toaster } from "sonner";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const HelpPage = lazy(() => import("../pages/HelpPage/HelpPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage/ProfilePage"));
const ArticlePage = lazy(() => import("../pages/ArticlePage/ArticlePage"));
const AdminPage = lazy(() => import("../pages/AdminPage/AdminPage"));
const WriterPage = lazy(() => import("../pages/WriterPage/WriterPage"));
const CategoriesPage = lazy(
  () => import("../pages/CategoriesPage/CategoriesPage")
);

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Box
      sx={{
        mx: { xs: "45%", md: "46.5%", lg: "48%" },
        mt: { xs: "200px", md: "350px", lg: "500px" },
      }}
    >
      <CircularProgress
        color="primary"
        sx={{ scale: { xs: "1.2", md: "1.5", lg: "2" } }}
      />
    </Box>
  ) : (
    <>
      <Toaster richColors position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/posts/:id" element={<ArticlePage />} />
          <Route path="/help" element={<HelpPage />}>
            <Route path="/help/:category" element={<TutorialsList />} />
          </Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/" component={<LoginPage />} />
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute redirectTo="/login" component={<ProfilePage />} />
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<AdminPage />}
                roles={["admin"]}
              />
            }
          />
          <Route
            path="/categories"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<CategoriesPage />}
                roles={["admin"]}
              />
            }
          />
          <Route
            path="/writer"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<WriterPage />}
                roles={["writer"]}
              />
            }
          >
            <Route
              path="/writer/posts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<WriterPosts />}
                  roles={["writer"]}
                />
              }
            />
            <Route
              path="/writer/tutorials"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<WriterTutorials />}
                  roles={["writer"]}
                />
              }
            />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
