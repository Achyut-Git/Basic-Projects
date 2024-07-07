let btc = document.getElementById("bitcoin")
let eth = document.getElementById("ethereum")
let doge = document.getElementById("dogecoin")

var settings = {
    "async":"true",
    "scrossDomain": "true",
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function(response){
    btc.textContent = response.bitcoin.usd
    eth.textContent = response.ethereum.usd
    doge.textContent = response.dogecoin.usd
})