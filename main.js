/* Moralis init code */
const serverUrl = "https://kupkethwblgf.usemoralis.com:2053/server";
const appId = "YpYvIbs7kp82Zl7zdKwVB4RUJl06nfGDEggQ0cwiF";
Moralis.start({ serverUrl, appId });

/* TODO: Codigo de auntentificacion de cuenta y salida*/
async function login() {
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate({ signingMessage: "Acceso a iTest" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console(error);
        });
    }
  }
  async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
  }
  document.getElementById("btn-login").onclick = login;
  document.getElementById("btn-logout").onclick = logOut;