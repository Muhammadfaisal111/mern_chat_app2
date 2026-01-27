import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
//import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/authentication/Login.jsx";
import SignUp from "./pages/authentication/SignUp.jsx";
import Home from "./pages/Home/Home.jsx";

/*const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);*/

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
