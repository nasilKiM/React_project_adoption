import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import HomePage from "../Pages/Home";
import DetailPage from "../Pages/DetailPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/detail", element: <DetailPage /> },
    ],
  },
]);

export default router;
