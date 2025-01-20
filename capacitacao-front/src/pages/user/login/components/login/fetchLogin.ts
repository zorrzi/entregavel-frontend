import { config } from "../../../../../config/config";

export async function loginUser(email: string, password: string): Promise<{ data: any; response: Response }> {
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }), // Dados de login
    credentials: "include", // Inclui cookies de autenticação
  };

  const response = await fetch(`${config.apiBaseUrl}/director/auth/login`, options);
  const data = await response.json();

  return { data, response };
}
