import React, { Children } from 'react'
import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from '../layouts/dashboardLayout';
import { Dashboard } from '../pages/Dashboard';
import { Education } from '../pages/Education';
const Admin = () => {
    return useRoutes([
        {
            path: "/",
            element : <Navigate to="dashboard"  />
        },
        {
            path: "dashboard",
            element: <DashboardLayout />,
            children: [
                {
                    path: "",
                    element:<Dashboard/>,
                    
                },
                {
                    path: "education",
                    element: <Education/>,
                
                },
            ]
        }
  ])
}

export default Admin
