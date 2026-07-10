import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./home";
import { Contact } from "./contact";
import { Characters } from "./characters";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/characters",
        element: <Characters />
    }
])

export const Routes = () => {
    return <>
        <RouterProvider router={routes} />;
    </>
}