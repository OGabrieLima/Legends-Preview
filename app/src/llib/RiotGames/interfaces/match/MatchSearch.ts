import { RegionGroup } from "../regions/RegionGroup.js";
import { GameTypes } from "./GameTypes.js";

export interface ListMatchSearch {
  readonly summoner_puuid:  string;
  readonly startTime?:      number;
  readonly endTime?:        number;
  readonly queue?:          number | null;
  readonly type?:           GameTypes;
  readonly count?:          number;
  readonly index?:          number;
  readonly region:         RegionGroup;
}