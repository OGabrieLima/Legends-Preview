
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
  }
}