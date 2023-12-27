import { StatusError } from "../misc/StatusError.js";
/* Summoner Interface */
/**
 * ```markdown
 * # accountId
 *    - Encrypted account ID. Max length 56 characters
 * # profileIconId
 *    - ID of the summoner icon associated with the summoner.
 * # revisionDate
 *    - Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: summoner name change, summoner level change, or profile icon change.
 * # name
 *    - Summoner name
 * # id
 *    - Encrypted summoner ID. Max length 63 characters.
 * # puuid
 *    - Encrypted PUUID. Exact length of 78 characters.
 * # summonerLevel
 *    - Summoner level associated with the summoner.
 * 
 * ```
 */
export interface SummonerDTO {
  /** Encrypted account ID. Max length 56 characters. */
  readonly accountId:       string; 
  /** ID of the summoner icon associated with the summoner. */
  readonly profileIconId:   number;
  /** Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: summoner name change, summoner level change, or profile icon change. */
  readonly revisionDate:    number;
  /** Summoner name */
  readonly name:            string;
  /** Encrypted summoner ID. Max length 63 characters. */
  readonly id:              string;
  /** Encrypted PUUID. Exact length of 78 characters. */
  readonly puuid:           string;
  /** Summoner level associated with the summoner. */
  readonly summonerLevel:   number;

  readonly status?:         StatusError;
}