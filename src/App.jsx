import Footer from "./Componets/Footer/Footer";
import MainSection from "./Componets/MainSection/MainSection";
import { createBrowserRouter } from "react-router-dom";
import Signup from "./Componets/Auth/Signup";
import Login from "./Componets/Auth/Login";
import ForgetPassowrd from "./Componets/Auth/ForgetPassowrd";
import Home from "./Pages/Home";
import Profile from "./Utils/Profile";
import ProblemsQuestion from "./Utils/ProblemsQuestion";
import VerifyInfo from "./Pages/VerifyInfo";

const App = () => {
  return (
    <div>
      <MainSection />
      <Footer />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signUp",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgotpassword",
    element: <ForgetPassowrd />,
  },
  {
    path: "/problemset",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/problems/:id",
    element: <ProblemsQuestion />,
  },
  {
    path: "/verifyuser",
    element: <VerifyInfo />,
  },
]);

export default AppRouter;
