import React, { Children } from 'react'
import { Navigate, useRoutes } from "react-router-dom";




import { DashboardLayout, Dashboard, Education } from './Element';


const Admin = () => {
    return useRoutes([
        {
            path: "/",
            element: <Navigate to="dashboard" />
        },
        {
            path: "dashboard",
            element: <DashboardLayout />,
            children: [
                {
                    path: "",
                    element: <Dashboard />,

                },
                {
                    path: "education",
                    element: <Education />,

                },
            ]
        }
    ])
}

export default Admin
