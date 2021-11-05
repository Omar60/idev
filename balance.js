Moralis.initialize("5JNM9X1Nq8ciDngst2pNBUrSoThG5a7jBPYUvrZM"); // Application id from moralis.io
Moralis.serverURL = "https://xsmb9wqekxnl.moralishost.com:2053/server"; //Server url from moralis.io

async function getBalance() {
  balance = await Moralis.Web3API.account.getNativeBalance({
    chain: "bsc",
    address: "0x67422A4b99D5a22094e54D4e7Ba2Da36431d5C50",
  });
  console.log(balance);
  let ethBalance = balance.ethBalance + " BNB";
  document.getElementById("balance").innerHTML = balance;
}
getBalance();
