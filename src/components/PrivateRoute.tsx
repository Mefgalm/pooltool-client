import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ children }: { children?: React.ReactNode }) {
    if (!localStorage.getItem("token")) {
        return <Navigate to="/" replace></Navigate>;
    }

    return (<>
        {children ? children : <Outlet />}
    </>);
};
