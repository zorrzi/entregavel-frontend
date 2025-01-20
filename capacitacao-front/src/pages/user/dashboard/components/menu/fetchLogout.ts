import { config } from "../../../../../config/config";

export async function logout(): Promise<{ data: any; response: Response }> {
    const options: RequestInit = {
        method: "POST",
        credentials: "include", // Inclui cookies na requisição
    };

    const response = await fetch(config.apiBaseUrl + "/director/auth/logout", options);
    const data = await response.json();

    return { data, response };
}
