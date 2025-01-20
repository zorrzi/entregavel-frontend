import { config } from "../../../../../config/config";

export async function updateEvent(eventId: string, updatedFields: Record<string, any>): Promise<{ data: any; response: Response }> {
  const options: RequestInit = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedFields), // Campos a serem atualizados
    credentials: "include", // Inclui cookies de autenticação
  };

  const response = await fetch(`${config.apiBaseUrl}/director/update-event/${eventId}`, options);
  const data = await response.json();

  return { data, response };
}
