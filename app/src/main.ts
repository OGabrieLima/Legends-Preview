import { RiotAPI } from "./llib/RiotGames/index.js";
import { GameAcron } from "./llib/RiotGames/interfaces/misc/Game.js";
import { RegionGroup } from "./llib/RiotGames/interfaces/regions/RegionGroup.js";

const Riot = new RiotAPI();

let account = await Riot.Account.GetGameShard(GameAcron.Valorant, '-n8wKiHhEQv0PfYACj4vPjparWxS_jHgHEHRek_NnjQPhAH5nCgJi2QjUt9TWVKj8710r5Hq0I0lHQ', RegionGroup.AMERICAS);

if(account.status_code === 200)
{
  console.log(account.data.puuid);
}