import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import HomePage from "./pages/Home.page";
import LoginPage from "./pages/Login.page";
import BrowsePage from "./pages/Browse.page";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/browse",
      element: <BrowsePage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
