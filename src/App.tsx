import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layouts from "./layouts/Layouts";


const BrowserRouter = createBrowserRouter([
  {
    path: "*",
    Component: Root,
  },
]);



function App() {
  return (
   <RouterProvider router={BrowserRouter} />
  )
}


function Root() {
  return (
    <Routes>
      <Route path="/" element={<Layouts><Home /></Layouts> } />
      <Route path="/about" element={<Layouts><About /></Layouts>} />
    </Routes>
  )
}

export default App