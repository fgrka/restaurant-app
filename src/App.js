import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Menu from './pages/Menu';
import './App.css';


const router = createBrowserRouter([
  { path: "/", element: <Welcome/>},
  { path: "/Home", element: <Home/>},
  { path: "/Login", element: <Login/>},
  { path: "/Register", element: <Register/>},
  { path: "/Menu", element: <Menu/>},
])



function App() {

  return (
  
    <RouterProvider router={router}/>
  )
}


export default App;
