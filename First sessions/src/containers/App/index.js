import React, {
  useState
} from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Login from "../components/login";
import Main from "../components/main";
import "./index.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token"));

  const videoList = [{
    title: "React Workout: Reducers with Cassidy Williams",
    session: "Session 1",
    src: "https://www.youtube.com/embed/sf4spiPynBE",
  }, 
  {
    title: "React Workout: Intro to useState and useEffect with Cassidy Williams",
    session: "Session 2",
    src: "https://www.youtube.com/embed/GLuPJzl_Nv4",
  }, 
  {
    title: 'Using Composition in React to Avoid "Prop Drilling"',
    session: "Session 3",
    src: "https://www.youtube.com/embed/3XaXKiXtNjw",
  }, 
  {
    title: "Navigation Blocking in history v5",
    session: "Session 4",
    src: "https://www.youtube.com/embed/kt1EwqBa7aA",
  }, 
  {
    title: "Navigation Blocking in history v5",
    session: "Session 4 copy",
    src: "https://www.youtube.com/embed/kt1EwqBa7aA",
  }, 
];

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }

  const onLogin = () => {
    const loader = document.getElementById("loader");
    const main = document.getElementById("main");

    main.setAttribute("hidden", "hidden");
    loader.removeAttribute("hidden");

    setTimeout(() => {
      localStorage.setItem("token", "some random token from BE");
      setIsLoggedIn(true);
      loader.setAttribute("hidden", "hidden");
      main.removeAttribute("hidden");
    }, 3000);
  };

  if (!isLoggedIn) {
    return <Login onLogin = {
      onLogin
    }
    />;
  }

  return ( <>
    <Header logout = {logout}/>
    <Main videoList={videoList}/>
    <Footer />
    </>
  );
}

export default App;