import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components";
import { Home, Login } from "./pages";

function App() {
  // -- Router

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
