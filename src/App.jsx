import { createBrowserRouter } from "react-router-dom";
import Index from "./components/Index";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
]);

export default App
