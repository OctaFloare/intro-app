import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./home";
import { Contact } from "./contact";
import { Characters } from "./characters";
import { CharacterDetail } from "./character";

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
    },
    {
        path: '/character/:id',
        element: <CharacterDetail />
    }
])

export const Routes = () => {
    return <>
        <RouterProvider router={routes} />;
    </>
}