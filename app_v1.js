let getEl = (id) => { return document.querySelector(id)}
let stockBinance = getEl('#binance');
let stockLitecoin = getEl('#litecoin');
let stockDogecoin = getEl('#dogecoin');

let precioBnb = getEl('#precioBinance');
let precioLtc = getEl('#precioLitecoin');
let precioDoge = getEl('#precioDogecoin');

let liquidezBinance = getEl('#liquidez-binance');
let liquidezLitecoin = getEl('#liquidez-litecoin');
let liquidezDogecoin = getEl('#liquidez-dogecoin');

let cantidadBinance = getEl('#cantidadBinance');
let cantidadLitecoin = getEl('#cantidadLitecoin');
let cantidadDogecoin = getEl('#cantidadDogecoin');

let balanceBinance = getEl('#balance-binance');
let balanceLitecoin = getEl('#balance-litecoin');
let balanceDogecoin = getEl('#balance-dogecoin')

let capitalBinance = getEl('#bnbCapital');
let capitalLitecoin = getEl('#ltcCapital');
let capitalDogecoin = getEl('#dogeCapital');


liquidezBinance.innerHTML = 0;
liquidezLitecoin.innerHTML = 0; 
liquidezDogecoin.innerHTML = 0;

cantidadBinance.innerHTML = 0;
cantidadLitecoin.innerHTML = 0;
cantidadDogecoin.innerHTML = 0;


let inversion = getEl('#inversion')
let total = getEl('#total');
let balanceTotal = getEl('#balanace-total');
let times = 0;

let totalEl = getEl('#total').innerHTML;



// let balance =  (StockPriceRound / bnbPrecio)*100;
//     balanceBinance.innerText = balance.toFixed(2) + "%";



function liquidez(){
    total_liquidez = 0;
     var bnb = document.getElementById("liquidez-binance").innerHTML;
    
     var ltc = document.getElementById("liquidez-litecoin").innerHTML;
    
     var doge = document.getElementById("liquidez-dogecoin").innerHTML;
     
     
     var total_liquidez = parseFloat(bnb) + parseFloat(ltc) + parseFloat(doge);
     return "$" + (total_liquidez);
     
    
}



 //TOTAL


//BINANCE
let bnb = 0.344
cantidadBinance.innerText =bnb

let bnbCapital = 185.97
capitalBinance.innerText = bnbCapital

let bnbPrecio = 540.60
precioBnb.innerText = bnbPrecio



let ws = new WebSocket('wss://stream.binance.com:9443/ws/bnbbusd@trade');
ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let stockPrice =  stockObject.p;
    let StockPriceRound = Math.round(stockPrice);
    stockBinance.innerText = "$" + StockPriceRound;

    let liquidez_var = Math.round(StockPriceRound * bnb);
    liquidezBinance.innerText = liquidez_var;
    total.innerText = liquidez();

    let balance =  (StockPriceRound / bnbPrecio)*100;
    balanceBinance.innerText = balance.toFixed(2) + "%";
    
};



//LITECOIN
let ltc  = 1.0200
cantidadLitecoin.innerText = ltc

let ltcCapital = 156.67
capitalLitecoin.innerText = ltcCapital

let ltcPrecio = 153.60
precioLtc.innerText = ltcPrecio


let ws2 = new WebSocket('wss://stream.binance.com:9443/ws/ltcbusd@trade');

ws2.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let stockPrice = stockObject.p;
    let StockPriceRound = Math.round(stockPrice);
    stockLitecoin.innerText = "$" + StockPriceRound;

    let liquidez_var = Math.round(StockPriceRound * ltc);
    liquidezLitecoin.innerText = liquidez_var;
    total.innerText = liquidez();

    let balance =  (StockPriceRound / ltcPrecio)*100;
    balanceLitecoin.innerText = balance.toFixed(2) + "%";
};

//DOGE
let doge = 865
cantidadDogecoin.innerText = doge

let dogeCapital = 156.82
capitalDogecoin.innerText = dogeCapital

let dogePrecio = 0.1813
precioDoge.innerText = dogePrecio

let ws3 = new WebSocket('wss://stream.binance.com:9443/ws/dogebusd@trade');

ws3.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let stockPrice = stockObject.p;
    let StockPriceRound = stockPrice;
   stockDogecoin.innerText = "$" + StockPriceRound;

    let liquidez_var = Math.round(StockPriceRound * doge);
    liquidezDogecoin.innerText = liquidez_var;    
    total.innerText = liquidez();

    
    let balance =  (StockPriceRound / dogePrecio)*100;
    balanceDogecoin.innerText = balance.toFixed(2) + "%";
};

inversion.innerText = bnbCapital + ltcCapital + dogeCapital;

