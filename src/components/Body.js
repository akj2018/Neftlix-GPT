import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import HomePage from "../pages/Home.page";
import LoginPage from "../pages/Login.page";
import BrowsePage from "../pages/Browse.page";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

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
  ]);

  useEffect(() => {
    // Set an observer to track changes to user auth state
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in (sign-up or sign in)
        const uid = user.uid;
        const email = user.email;
        const displayName = user.displayName;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
