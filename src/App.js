import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { initializeFirebase } from "./utils/firebase";

function App() {
  const [firebaseReady, setFirebaseReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      await initializeFirebase();
      setFirebaseReady(true);
    };
    init();
  }, []);

  if (!firebaseReady) {
    return null;
  }

  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
