import { Navigate, useSearchParams } from "react-router-dom";

export default function ConfirmPassword() {
    const [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams.get("token"));

    return (
        <Navigate to="/"></Navigate>
    )
}