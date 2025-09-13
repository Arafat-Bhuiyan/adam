import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { Home } from "../pages/Home/Home";
import { Services } from "../pages/Services/Services";
import { Providers } from "../pages/Providers/Providers";
import { About } from "../pages/About/About";
import Terms from "../pages/Terms & Policy/Terms";
import Privacy from "../pages/Terms & Policy/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/providers",
        element: <Providers />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
    ],
  },
]);

export default router;
