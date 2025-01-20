import {config} from "../../../../../../config/config"

export async function GetAllEvents(): Promise<{data: any, response: Response}> {
    
    let options: RequestInit = {
        method: "GET",
        credentials: "include"
    }

    let response = await fetch(config.apiBaseUrl + "/events", options)
    let data = await response.json()

    return {data, response}

}