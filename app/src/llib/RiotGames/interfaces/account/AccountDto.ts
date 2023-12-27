import { StatusError } from "../misc/StatusError.js";

export interface AccountDto {
  readonly puuid:           string;
  /** This field may be excluded from the response if the account doesn't have a gameName. */
  readonly gameName:        string;
  /** This field may be excluded from the response if the account doesn't have a tagLine. */
  readonly tagLine:         string;
  /** Error status */
  readonly status?:         StatusError;
}