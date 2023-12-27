import { env } from "../../../zod/index.js";
import { Logger } from "../../base/logger.js";
import { Endpoints } from "../../endpoints/endpoints.js";
import { GameTypes } from "../../interfaces/match/GameTypes.js";
import { MatchV5DTOs } from "../../interfaces/match/MatchDTO.js";
import { ListMatchSearch } from "../../interfaces/match/MatchSearch.js";
import { MatchV5TimelineDTOs } from "../../interfaces/match/MatchTimelineDTO.js";
import { QueueTypes } from "../../interfaces/match/QueueId.js";
import { Response } from "../../interfaces/misc/Response.js";
import { RegionGroup } from "../../interfaces/regions/RegionGroup.js";
export class Match extends Logger {
  constructor() {
    super();
  }

  public async GetMatchesID({
    summoner_puuid,
    startTime = 0,
    endTime = Number((Date.now() / 1000).toFixed(0)),
    queue = QueueTypes.Ranked,
    type = GameTypes.All,
    index = 0,
    count = 20,
    region,
  }: ListMatchSearch) {
    this.LogInfo(`Riot: GetMatchListFromPUUID | ${summoner_puuid}`);
    let response;
    let matchList = new Array<string>();
    for (let i = 0; i < 5000; i++) {
      response = await fetch(
        `https://${region}.api.riotgames.com/${Endpoints.Match.prefix}/v${Endpoints.Match.version}/${Endpoints.Match.PUUID.path}/${summoner_puuid}/ids?` +
          `${startTime ? `startTime=${startTime}&` : ""}` +
          `${endTime ? `endTime=${endTime}&` : ""}` +
          `queue=${queue}&` +
          `type=${type}&start=${index + 100 * i}&count=${count}`,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
            "Accept-Language":
              "pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "Accept-Charset":
              "application/x-www-form-urlencoded; charset=UTF-8",
            Origin: "https://developer.riotgames.com",
            "X-Riot-Token": env.RIOT_TOKEN,
          },
        }
      );
      if (response.status === 200) {
        const data = (await response.json()) as string[];
        matchList.push(...data);
        if (data.length !== 100) break;
      }
    }

    this.LogResponse(response!.status);
    return {
      status_code: response!.status,
      data: matchList,
    } as Response<string[]>;
  }

  public async GetMatchByID(matchID: string, region: RegionGroup) {
    this.LogInfo(`Riot: Get match from match_id | ${matchID}`);

    const response = await fetch(
      `https://${region}.api.riotgames.com/${Endpoints.Match.prefix}/v${Endpoints.Match.version}/${Endpoints.Match.path}/${matchID}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
        "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        Origin: "https://developer.riotgames.com",
        "X-Riot-Token": env.RIOT_TOKEN,
      },
    });
    
    this.LogResponse(response!.status);
    return {
      status_code: response!.status,
      data: await response.json(),
    } as Response<MatchV5DTOs>;
  }

  public async GetMatchTimeline(matchID: string, region: RegionGroup)
  {
    this.LogInfo(`Riot: Get match timeline from match_id | ${matchID}`);

    const response = await fetch(
      `https://${region}.api.riotgames.com/${Endpoints.Match.prefix}/v${Endpoints.Match.version}/${Endpoints.Match.path}/${matchID}/timeline`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
        "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        Origin: "https://developer.riotgames.com",
        "X-Riot-Token": env.RIOT_TOKEN,
      },
    });

    this.LogResponse(response!.status);
    return {
      status_code: response!.status,
      data: await response.json(),
    } as Response<MatchV5TimelineDTOs>;
  }
}
