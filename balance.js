// get mainnet native balance for the current user
const balance = await Moralis.Web3API.account.getNativeBalance();

// get BSC native balance for a given address
const options = { chain: "bsc", address: "0x...", to_block: "1234" };
const balance = await Moralis.Web3API.account.getNativeBalance(options);