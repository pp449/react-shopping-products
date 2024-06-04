import { createBrowserRouter } from "react-router-dom";
import ProductListPage from "@/pages/ProductListPage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <ProductListPage />,
      },
    ],
  },
]);

export default router;
