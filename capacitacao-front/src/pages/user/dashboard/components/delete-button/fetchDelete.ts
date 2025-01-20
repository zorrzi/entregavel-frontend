import { config } from "../../../../../config/config";

export async function deleteEvent(eventId: string): Promise<{ data: any; response: Response }> {
  const options: RequestInit = {
    method: "DELETE",
    credentials: "include", // Inclui cookies de autenticação, se necessário
  };
  console.log(eventId);
  const response = await fetch(`${config.apiBaseUrl}/director/delete-event/${eventId}`, options);
  const data = await response.json();

  return { data, response };
}
