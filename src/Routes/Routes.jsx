import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Home from "../Pages/Home/Home";
import TaskManagementDashboard from "../Pages/TaskManagementDashboard/TaskManagementDashboard";
import ManageYourTask from "../Pages/TaskManagementDashboard/ManageYourTaskHome/ManageYourTask";
import CreateNewTask from "../Pages/TaskManagementDashboard/CreateNewTask/CreateNewTask";
import About from "../Pages/About/About";
import UpdateTask from "../Pages/TaskManagementDashboard/UpdateTask/UpdateTask";
import PrivateRoutes from "./PrivateRoutes";
import ErrorElement from "../Components/ErrorElement/ErrorElement";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorElement/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><TaskManagementDashboard/></PrivateRoutes>,
        errorElement: <ErrorElement/>,
        children: [
            {
                path: 'dashboardhome',
                element: <ManageYourTask/>
            },
            {
                path: 'createnewtask',
                element: <CreateNewTask/>
            },
            {
                path: 'updatetask/:id',
                element: <UpdateTask/>
            }

        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signup',
        element: <Signup/>
    }
]);
export default router;