import fetch from "node-fetch";
import { Regions } from "../../interfaces/regions/Regions.js";
import { env } from "../../../zod/index.js";
import { Endpoints } from "../../endpoints/endpoints.js";
import { Logger } from "../../base/logger.js";
import { SummonerDTO } from "../../interfaces/summoner/SummonerDto.js";
import { Response } from "../../interfaces/misc/Response.js";
export class Summoner extends Logger {
  constructor() {
    super();
  }

  public async GetByAccountID(
    encryptedAccountId: string,
    region: Regions
  ) {
    this.LogInfo(`Riot: GetSummonerFromEncryptedAccountId | ${encryptedAccountId}`);

    const response = await fetch(
      `https://${region}.api.riotgames.com/${Endpoints.Summoner.prefix}/v${Endpoints.Summoner.version}/${Endpoints.Summoner.AccountID.path}/${encryptedAccountId}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
          "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
          "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
          Origin: "https://developer.riotgames.com",
          "X-Riot-Token": env.RIOT_TOKEN,
        },
      }
    );

    this.LogResponse(response);
    return {
      status_code: response.status,
      data: (await response.json()),
    } as Response<SummonerDTO>;
  }

  public async GetByPUUID(puuid: string, region: Regions) {
    this.LogInfo(`Riot: GetRiotAccountFromPUUID | ${puuid}`);

    const response = await fetch(
      `https://${region}.api.riotgames.com/${Endpoints.Summoner.prefix}/v${Endpoints.Summoner.version}/${Endpoints.Summoner.PUUID.path}/${puuid}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
          "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
          "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
          Origin: "https://developer.riotgames.com",
          "X-Riot-Token": env.RIOT_TOKEN,
        },
      }
    );

    this.LogResponse(response);
    return {
      status_code: response.status,
      data: (await response.json()),
    } as Response<SummonerDTO>;
  }

  public async GetBySummonerID(encryptedSummonerId: string, region: Regions) {
    this.LogInfo(`Riot: GetRiotAccountFromEncryptedSummonerId | ${encryptedSummonerId}`);

    const response = await fetch(
      `https://${region}.api.riotgames.com/${Endpoints.Summoner.prefix}/v${Endpoints.Summoner.version}/${Endpoints.Summoner.SummonerID.path}/${encryptedSummonerId}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
          "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
          "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
          Origin: "https://developer.riotgames.com",
          "X-Riot-Token": env.RIOT_TOKEN,
        },
      }
    );

    this.LogResponse(response);
    return {
      status_code: response.status,
      data: (await response.json()),
    } as Response<SummonerDTO>;
  }

}
