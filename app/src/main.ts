import { RiotAPI } from "./llib/RiotGames/index.js";
import { GameAcron } from "./llib/RiotGames/interfaces/misc/Game.js";
import { RegionGroup } from "./llib/RiotGames/interfaces/regions/RegionGroup.js";
import { Regions } from "./llib/RiotGames/interfaces/regions/Regions.js";

const Riot = new RiotAPI();

let account = await Riot.Account.GetByRiotID(
  { gameName: "OGabrieLima", tagLine: "Mytic" },
  RegionGroup.AMERICAS
);

if (account.status_code === 200) {
  let summoner = await Riot.Summoner.GetByPUUID(
    account.data.puuid,
    Regions.BRAZIL
  );
  if (summoner.status_code === 200) {
    console.log(`[i] Getting Ranked games from: ${summoner.data.name}`);
    let games = await Riot.Summoner.GetMatchesID({
      summoner_puuid: summoner.data.puuid,
      count: 100,
      region: RegionGroup.AMERICAS,
    });
    let matchesLikeJungle = new Array<string>;
    for (let matchID of games.data) {
      const match = await Riot.Summoner.GetMatchByID(
        matchID,
        RegionGroup.AMERICAS
      );
      if (match.status_code === 200) {
        match.data.info.participants.map((participant, index) => {
          if(participant.puuid === summoner.data.puuid)
          {
            if(participant.lane === "JUNGLE")
            {
              matchesLikeJungle.push(match.data.metadata.matchId);
            }
          }
        })
      }
    }
    console.log(`matchesLikeJungle.length: ${matchesLikeJungle.length}`)
  }
}
