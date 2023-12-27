import { RiotAPI } from "./llib/RiotGames/index.js";
import { RegionGroup } from "./llib/RiotGames/interfaces/regions/RegionGroup.js";

const Riot = new RiotAPI();

let account = await Riot.Account.GetByRiotID({ gameName: "OGabrieLima", tagLine: "Mytic"}, RegionGroup.AMERICAS);

if(account.status_code === 200)
{
  console.log(account.data.puuid);
}