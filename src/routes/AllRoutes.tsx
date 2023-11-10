import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
import WebLayout from "../components/layout/WebLayout";
import SimpleLineChart from "../components/charts/LineChart";
import PieChartComp from "../components/charts/PieChartComp";

const Index = createBrowserRouter([
  {
    path: "/",
    element: <WebLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/line",
        element: <SimpleLineChart />,
      },
      {
        path: "/pie",
        element: <PieChartComp />,
      },
    ],
  },
]);

export default Index;
