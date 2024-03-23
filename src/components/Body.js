import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login.page";
import BrowsePage from "../pages/Browse.page";
import GPTSearchPage from "../pages/GptSearch.page";
import ErrorPage from "../pages/Error.page";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/browse",
      element: <BrowsePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/gpt",
      element: <GPTSearchPage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
