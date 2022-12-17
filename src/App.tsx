import React from 'react'
import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from './layouts/dashboardLayout';
import Admin from './routes/Admin';


const App = () => {
  return (
    <div>
        <Admin/>
    </div>
  )
}

export default App
