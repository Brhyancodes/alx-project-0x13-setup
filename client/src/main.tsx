import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/home/Home.tsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Error from "./pages/Error.tsx";
import RegisterPage from "./pages/auth/register.tsx";
import PasswordRecoveryForm from "./pages/auth/forgetpw.tsx";
import LoginPage from "./pages/auth/login.tsx";
import LogoutPage from "./pages/auth/logout.tsx";
import ProductPage from "./pages/product/Product_Page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/registration",
    element: <RegisterPage />,
  },
  {
    path: "/passwordreset",
    element: <PasswordRecoveryForm />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },{
    path: "/logout",
    element: <LogoutPage />,
  },
  {
    path: "/product",  // Add route for product page
    element: <ProductPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
