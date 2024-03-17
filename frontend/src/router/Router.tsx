import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginRegister/LoginPage";
import Register from "../pages/LoginRegister/RegisterPage";

const Router = () => {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <Register /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
