import { Account } from "./account/account-v1.js";
import { BaseAPI } from "./base/base.js";

export class RiotAPI extends BaseAPI{
  constructor() {
    super();
    this.Account = new Account();
  }

  /**
   * Account v1 methods
   */
  public Account;
}