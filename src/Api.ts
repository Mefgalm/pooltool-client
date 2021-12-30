
type User = {
    id: number;
    email: string;
}

type Result<T> = {
    code: string;
    message?: string;
    result?: T;
}

const baseUrl = "http://localhost:4000/api/"

export async function SignInReq(email: string, password: string): Promise<Result<User>> {
    const result = await fetch(baseUrl + "auth/sign-in", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    return await (result.json() as Promise<Result<User>>);
}