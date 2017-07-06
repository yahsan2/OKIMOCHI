module.exports = {
  adminPassword: "hoge",
  mongoUri: `mongodb://${process.env.mongo}:27017/example` || `mongodb://${process.env.MONGO_URI}:27017/example` || `mongodb://localhost:27017/example`,
  botconfig: {
    clientId: process.env.CLIENT_ID ||"2154447482.200385943586",
    clientSecret: process.env.CLIENT_SECRET || "9efb47c35019d6e656575e331f5480fc",
    scopes: ['bot']
  },
  bitcoin: {
    network: process.env.BITCOIND_NETWORK || 'testnet',
    username: process.env.BITCOIND_USERNAME || 'slackbot',
    password: process.env.BITCOIND_PASSWORD || 'bitcoin-tipper',
    host: process.env.BITCOIND_PORT_8333_TCP_ADDR ||
      process.env.BITCOIND_URI || "localhost"
  }
}
