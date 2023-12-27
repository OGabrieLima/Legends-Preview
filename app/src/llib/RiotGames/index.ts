import { Account } from "./account/account-v1.js";
import { Summoner } from "./LoL/Summoner/summoner-v4.js";

export class RiotAPI{
  constructor() {
    this.Account = new Account();
    this.Summoner = new Summoner();
  }

  /**
   * Account v1 methods
   */
  public Account: Account;
  /**
   * Summoner v4 methods
   */
  public Summoner: Summoner;
}