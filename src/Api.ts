
type User = {
    id: number;
    email: string;
}

type SignInResponse = {
    user: User,
    token: string
}

type Result<T> = {
    code: string;
    message: string;
    result: T;
}

const baseUrl = "http://localhost:4000/api/";

async function get<TOut>(path: string): Promise<Result<TOut>> {
    const result = await fetch(baseUrl + path, {
        method: "GET",
    });

    return await (result.json() as Promise<Result<TOut>>);
}

async function update<TOut>(path: string, method: string, req: any): Promise<Result<TOut>> {
    const result = await fetch(baseUrl + path, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
    });

    return await (result.json() as Promise<Result<TOut>>);
}

export async function signInReq(email: string, password: string): Promise<Result<SignInResponse>> {
    return await update("auth/sign-in", "POST", { email, password });
}

export async function signUpReq(email: string, password: string): Promise<Result<User>> {
    return await update("auth/sign-up", "POST", { email, password });
}

export async function forgotPasswordReq(email: string): Promise<Result<any>> {
    return await update("auth/forgot-password", "POST", { email });
}

export async function resetPasswordReq(newPassword: string, token: string): Promise<Result<any>> {
    return await update("auth/reset-password", "PUT", { newPassword, token });
}