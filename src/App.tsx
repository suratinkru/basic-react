import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layouts from "./layouts/Layouts";
import React from "react";


const BrowserRouter = createBrowserRouter([
  {
    path: "*",
    Component: Root,
  },
]);



function App() {
  React.useEffect(() => {
    console.log('App');
    
  }, []);
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