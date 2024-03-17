import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home.page";
import LoginPage from "../pages/Login.page";
import BrowsePage from "../pages/Browse.page";
import GPTSearchPage from "../pages/GptSearch.page";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/browse",
      element: <BrowsePage />,
    },
    {
      path: "/gpt",
      element: <GPTSearchPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
