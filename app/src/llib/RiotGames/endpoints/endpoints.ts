
export const Endpoints = {
  Account: {
    prefix: "riot/account",
    version: 1,
    riotID: {
      path: "accounts/by-riot-id",
    },
    PUUID: {
      path: "accounts/by-puuid",
    },
    Shards: {
      path: "active-shards/by-game",
    }
  },
  Summoner: {
    prefix: "lol/summoner",
    version: 4,
    AccountID: {
      path: "summoners/by-account"
    },
    PUUID: {
      path: "summoners/by-puuid"
    },
    SummonerID: {
      path: "summoners"
    }
  },
  Match: {
    prefix: "lol/match",
    version: 5,
    path: "matches",
    PUUID: {
      path: "matches/by-puuid"
    },
  }
}