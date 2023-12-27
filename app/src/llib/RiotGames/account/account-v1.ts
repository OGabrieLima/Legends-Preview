import fetch from "node-fetch";
import { AccountSearch } from "../interfaces/account/AccountSearch.js";
import { RegionGroup } from "../interfaces/regions/RegionGroup.js";
import { env } from "../../zod/index.js";
import { Endpoints } from "../endpoints/endpoints.js";
import { Logger } from "../base/logger.js";
import { AccountDto } from "../interfaces/account/AccountDto.js";
import { GameAcron } from "../interfaces/misc/Game.js";
import { Response } from "../interfaces/misc/Response.js";

export class Account extends Logger {
  constructor() {
    super();
  }

  public async GetByRiotID(
    { gameName, tagLine }: AccountSearch,
    region: RegionGroup
  ) {
    this.LogInfo(`Riot: GetRiotAccountFromRiotID | ${gameName}#${tagLine}`);

    const response = await fetch(
      `https://${region}.api.riotgames.com/${Endpoints.Account.prefix}/v${Endpoints.Account.version}/${Endpoints.Account.riotID.path}/${gameName}/${tagLine}`,
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

    this.LogResponse(response.status);
    return {
      status_code: response.status,
      data: (await response.json()),
    } as Response<AccountDto>;
  }

  public async GetByPUUID(puuid: string, region: RegionGroup) {
    this.LogInfo(`Riot: GetRiotAccountFromPUUID | ${puuid}`);

    const response = await fetch(
      `https://${region}.api.riotgames.com/${Endpoints.Account.prefix}/v${Endpoints.Account.version}/${Endpoints.Account.PUUID.path}/${puuid}`,
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

    this.LogResponse(response.status);
    return {
      status_code: response.status,
      data: (await response.json()),
    } as Response<AccountDto>;
  }

  public async GetGameShard(game: GameAcron, puuid: string, region: RegionGroup) {
    this.LogInfo(`Riot: GetRiotAccountFromPUUID | ${puuid}`);

    const response = await fetch(
      `https://${region}.api.riotgames.com/${Endpoints.Account.prefix}/v${Endpoints.Account.version}/${Endpoints.Account.Shards.path}/${game}/by-puuid/${puuid}`,
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

    this.LogResponse(response.status);
    return {
      status_code: response.status,
      data: (await response.json()),
    } as Response<AccountDto>;
  }
}
