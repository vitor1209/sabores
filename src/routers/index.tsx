import { createBrowserRouter, RouterProvider } from "react-router"
import { Home } from "../pages/Home/Home"
import { Detalhes } from "../pages/Detalhes/Detalhes"
import SideBar from "../components/Sidebar/Sidebar"

const routes = createBrowserRouter([
    {

        children: [
            {
                index: true,
                element: <Home />,
                path: "/",
            },
            {
                path: "/detalhes",
                element: <SideBar />,
                children: [
                    {
                        index: true,
                        element: <Detalhes />,
                    },
                ],
            },
        ],
    },
])

const Routes = () => {
    return <RouterProvider router={routes} />
}

export default Routes
