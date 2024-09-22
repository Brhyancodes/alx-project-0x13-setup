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
import Contact from "./pages/Contact.tsx";
import FAQ from "./pages/FAQ.tsx";
import About from "./pages/About.tsx";
import AOS from "aos"
import "aos/dist/aos.css";
import ProductDetailPage from "./pages/product/ProductDetailPage.tsx"; // Adjust the path as necessary

AOS.init({
  duration: 1000,
  once: false,
});

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
    path: "/forgetpw",
    element: <PasswordRecoveryForm />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/logout",
    element: <LogoutPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/product/:id", // Add this line for product details
    element: <ProductDetailPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/aboutus",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
