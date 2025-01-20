import { config } from "../../../../../../config/config";

export async function createEvent(formData: {
    name: string;
    description: string;
    date: string;
    location: string;
    capacity: number;
    start_time: string;
    end_time: string;
}): Promise<{ data: any; response: Response }> {
    const options: RequestInit = {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    };

    const response = await fetch(config.apiBaseUrl + "/director/create-event", options);
    const data = await response.json();

    return { data, response };
}
