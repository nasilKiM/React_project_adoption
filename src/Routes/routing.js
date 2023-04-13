import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Components/Layout";
import HomePage from "../Pages/Home";

const router = createBrowserRouter([
  {
    element: <LayOut />,
    children: [{ path: "/", element: <HomePage /> }],
  },
]);

export default router;
