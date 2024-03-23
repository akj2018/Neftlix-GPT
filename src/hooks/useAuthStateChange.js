import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const useAuthStateChange = (protectedPageRoute) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate(protectedPageRoute);
      } else {
        // User signed out
        dispatch(removeUser());
        navigate("/login");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
};

export default useAuthStateChange;
