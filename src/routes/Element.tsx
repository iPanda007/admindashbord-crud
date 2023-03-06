import { Suspense, lazy, ElementType, Component } from "react";

// loading screen


const Loadable = (Component: ElementType) => (props: any) =>
(
    <Suspense fallback={<>Loading</>}>
        <Component {...props} />
    </Suspense>
);



export const DashboardLayout = Loadable(
    lazy(() => import("../layouts/dashboardLayout"))
);

export const Dashboard = Loadable(
    lazy(() => import("../pages/admin/Dashboard"))
);
export const Education = Loadable(
    lazy(() => import("../pages/admin/Education"))
);

