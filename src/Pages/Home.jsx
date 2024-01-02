// import { Outlet, createBrowserRouter } from "react-router-dom";
import TopBar from "./TopBar";
import MidContent from "./MidContent";
// import HomeFooter from "./HomeFooter";

const Home = () => {
  return (
    <>
      <TopBar />
     {/* <Outlet/> */}
     <MidContent/>
      {/* <HomeFooter /> */}
    </>
  );
};

export default Home;

// const HomeRouter = createBrowserRouter([
//   {
//     path:'/home',
//     element:<Home/>,
//     children:[
//       {
//         path:'/home',
//         element:<MidContent/>
//       }
//     ]
//   }
// ])

// export default HomeRouter;
