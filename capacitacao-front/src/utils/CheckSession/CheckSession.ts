import { config } from "../../config/config";

export async function CheckSessionValidity(): Promise<{ data: any; response: Response }> {
    let options: RequestInit = {
        method: "POST",
        credentials: "include", // Inclui cookies na requisição
    };

    let response = await fetch(config.apiBaseUrl + "/director/auth/check/token", options);
    let data = await response.json();

    return { data, response };
}
