import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Login from "../pages/login/Login.jsx";
import Guilds from "../pages/guilds/Guilds.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import LandingPage from "../pages/landing/LandingPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Layout wrapping the nested routes
    errorElement: <ErrorPage />, // Fallback for routing errors when not valid route
    children: [
      // Define individual routes for the application
      { index: true, element: <LandingPage /> },
      { path: "/login", element: <Login /> },
      // { path: "/guilds", element: <Guilds /> },
      {
        path: "/guilds",
        element: (
          <ProtectedRoute>
            <Guilds />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
