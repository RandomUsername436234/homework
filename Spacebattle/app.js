//console.log("uss Schwarzenegger");
//
//console.log("enemieShip#1");
//
//console.log("enemieShip#2");
//
//console.log("enemieShip#3");
//
//console.log("enemieShip#4");
//
//console.log("enemieShip#5");
//
//console.log("enemieShip#6");

function ussSchwarzenegger() {
  Shipname = "ussSchwarzenegger";
  Hull = 20;
  Firepower = 5;
  Acurracy = 0.7;
}

function eShip1() {
  Shipname = eShip1;
  Hull = 3;
  Firepower = 4;
  Acurracy = 0.8;
}

function eShip2() {
  Shipname = eShip2;
  Hull = 3;
  Firepower = 2;
  Acurracy = 0.8;
}

function eShip3() {
  Shipname = eShip3;
  Hull = 3;
  Firepower = 2;
  Acurracy = 0.6;
}

function eShip4() {
  Shipname = eShip4;
  Hull = 6;
  Firepower = 4;
  Acurracy = 0.6;
}

function eShip5() {
  Shipname = eShip5;
  Hull = 6;
  Firepower = 2;
  Acurracy = 0.8;
}

function eShip6() {
  Shipname = "eShip6";
  Hull = 3;
  Firepower = 4;
  Acurracy = 0.6;
}

//^^ these functions don't return anything
// need Objects with the information of the ships
// use those objects information in the attack Function

//Object example
let goodguyShip = {
  Shipname: "eShip",
  Hull: 3,
  Firepower: 4,
  Acurracy: 0.6,
};

let enemyShip2 = {
  Shipname: "eShip2",
  Hull: 7,
  Firepower: 4,
  Acurracy: (Math.floor(Math.random() * 3) + 6) / 10,
};


console.log(enemyShip2.Acurracy);

function attack(x, y) {
  if (/*4 < 6 */ x.Firepower < y.Hull) {
    console.log("damage has be done");
  }
}

attack(goodguyShip, enemyShip);
