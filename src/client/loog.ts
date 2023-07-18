import { Configuration } from "../types";
import { Event } from "../types/event";

/**
 * Loog Client
 */
export default class Loog {
  private readonly clientID: string;
  private readonly publicKey: string;

  constructor({ clientID, publicKey }: Configuration) {
    this.clientID = clientID;
    this.publicKey = publicKey;
  }

  private setHeaders(): Headers {
    const headers = new Headers();
    headers.append("Public-Key", this.publicKey);
    headers.append("Content-Type", "application/json");
    headers.append("Client-ID", this.clientID);
    headers.append("Payload-From", "client");

    return headers;
  }

  private makeRequest(requestOptions: RequestInit, payload: Event): void {
    const rawPayload = JSON.stringify(payload);

    Object.assign(requestOptions, {
      body: rawPayload,
    })

    fetch("https://app.useloog.com/api/public/org/events", requestOptions)
      .then((response) => response.text())
      .then(() => console.log(":::Loog even sent:::"))
      .catch((error) => console.log(":::Loog error::: ", error))
  }

  public emit(payload: Event): void {
    const headers = this.setHeaders();
    const requestOptions: RequestInit = {
      headers,
      method: "POST",
      redirect: "follow"
    };

    if (this.clientID && this.publicKey) {
      this.makeRequest(requestOptions, payload)
    }
  }
}
