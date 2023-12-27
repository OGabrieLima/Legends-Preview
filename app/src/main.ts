import { RiotAPI } from "./llib/RiotGames/index.js";
import { GameAcron } from "./llib/RiotGames/interfaces/misc/Game.js";
import { RegionGroup } from "./llib/RiotGames/interfaces/regions/RegionGroup.js";
import { Regions } from "./llib/RiotGames/interfaces/regions/Regions.js";

const Riot = new RiotAPI();

let account = await Riot.Account.GetByRiotID(
  { gameName: "Tomo", tagLine: "0999" },
  RegionGroup.AMERICAS
);

if (account.status_code === 200) {
  console.log(account.data.puuid);
  let summoner = await Riot.Summoner.GetByPUUID(
    account.data.puuid,
    Regions.AMERICA_NORTH
  );
  if (summoner.status_code === 200) {
    console.log(summoner.data.name);
  }
}
