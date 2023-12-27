import { Response } from "node-fetch";

export class Logger{
  private get getTimeStamp() {
    return new Date().toLocaleString().replace(",", " |");
  }

  protected LogInfo(message: string) {
    console.info(`[${this.getTimeStamp}] 🔷 ${message}`);
  }

  protected async LogResponse(status_code: number) {
    console.log(
      `${
        status_code === 200
          ? `[${this.getTimeStamp}] -> 🟩 Success`
          : `[${this.getTimeStamp}] -> 🟥 Failed`
      }`
    );
  }
}
