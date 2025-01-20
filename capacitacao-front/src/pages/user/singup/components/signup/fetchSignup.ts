import { config } from "../../../../../config/config";

export async function registerUser(name: string, email: string, password: string): Promise<{ data: any; response: Response }> {
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }), // Dados de registro
    credentials: "include", // Inclui cookies de autenticação
  };

  const response = await fetch(`${config.apiBaseUrl}/director/auth/register`, options);
  const data = await response.json();

  return { data, response };
}
