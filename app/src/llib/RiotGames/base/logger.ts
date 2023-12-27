import { Response } from "node-fetch";
import { BaseAPI } from "./base.js";
import { RiotAPI } from "../index.js";

export class Logger{
  private get getTimeStamp() {
    return new Date().toLocaleString().replace(",", " |");
  }

  protected LogInfo(message: string) {
    console.info(`[${this.getTimeStamp}] 🔷 ${message}`);
  }

  protected async LogResponse(response: Response) {
    console.log(
      `${
        response.status === 200
          ? `[${this.getTimeStamp}] -> 🟩 Success`
          : `[${this.getTimeStamp}] -> 🟥 Failed ${
              ((await response.json()) as any).status.message
            }`
      }`
    );
  }
}
