import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./home";
import { Contact } from "./contact";
import { Characters } from "./characters";
import { Character } from "./character";
import { UpdateCharacter } from "./updateCharacter";
import {Episodes} from "./episodes";

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
        element: <Character />
    },
    {
        path: '/update-character/:id',
        element: <UpdateCharacter />
    },
    {
        path: '/episodes',
        element: <Episodes/>
    },
])

export const Routes = () => {
    return <>
        <RouterProvider router={routes} />
    </>
}