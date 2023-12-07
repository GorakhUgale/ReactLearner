import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Layout from "./components/layout";


const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [{
        path: "/",
        element: <Dashboard />
    },{
        path: "/aboutus",
        element: <AboutUs />
    }, {
        path: "/contactus",
        element: <ContactUs />
    }],
    errorElement: <Error />
}, ])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)

