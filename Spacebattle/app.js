console.log("uss Schwarzenegger");

console.log("enemieShip#1");

console.log("enemieShip#2");

console.log("enemieShip#3");

console.log("enemieShip#4");

console.log("enemieShip#5");

console.log("enemieShip#6");

let ussSchwarzenegger = {
    Shipname: "ussSchwarzenegger",
    Hull: 20,
    Firepower: 5,
    Acurracy: .7,
};

let eShip1 = {
    Shipname: "eShip1",
    Hull: 3,
    Firepower: 4,
    Acurracy:(Math.floor(Math.random() * 3) + 6) / 10,
};

function attack1(ussSchwarzenegger,eShip1) {
    if (ussSchwarzenegger.Firepower < eShip1.Hull) {
        console.log("Target destroyed!"); 
    } else if (eShip1.Firepower > ussSchwarzenegger.Hull) {
       console.log("Damage taken!") 
    } if (eShip1.Firepower < ussSchwarzenegger.Hull) {
        console.log("Ship destroyed! GAME OVER")
    }
};
attack1(ussSchwarzenegger, eShip1);

let eShip2 = {
    Shipname: "eShip2",
    Hull: 3,
    Firepower: 2,
    Acurracy:(Math.floor(Math.random() * 3) + 6) / 10,
};

function attack2(ussSchwarzenegger,eShip2) {
    if (ussSchwarzenegger.Firepower < eShip2.Hull) {
        console.log("Target destroyed!");
    } else if (eShip2.Firepower > ussSchwarzenegger.Hull) {
        console.log("Damage Taken!")
    } if (eShip2.Firepower < ussSchwarzenegger.Hull) {
        console.log("Ship destroyed! GAME OVER")
    }
};

attack2(ussSchwarzenegger, eShip2);

let eShip3 = {
    Shipname: "eShip3",
    Hull: 3,
    Firepower: 2,
    Acurracy:(Math.floor(Math.random() * 3) + 6) / 10,
};

function attack3(ussSchwarzenegger,eShip3) {
    if (ussSchwarzenegger.Firepower < eShip3.Hull) {
        console.log("Target destroyed!");
    } else if (eShip3.Firepower > ussSchwarzenegger.Hull) {
        console.log("Damage Taken!")
    } if (eShip3.Firepower < ussSchwarzenegger.Hull) {
        console.log("Ship destroyed! GAME OVER")
    }
};

attack3(ussSchwarzenegger, eShip3);

let eShip4 = {
    Shipname: "eShip4",
    Hull: 6,
    Firepower: 4,
    Acurracy:(Math.floor(Math.random() * 3) + 6) / 10,
};

function attack4(ussSchwarzenegger,eShip4) {
    if (ussSchwarzenegger.Firepower < eShip4.Hull) {
        console.log("Target destroyed!");
    } else if (eShip4.Firepower > ussSchwarzenegger.Hull) {
        console.log("Damage Taken!")
    } if (eShip4.Firepower < ussSchwarzengger.Hull) {
        console.log("Ship destroyed! GAME OVER")
    }
};

attack4(ussSchwarzenegger, eShip4);

let eShip5 = {
    Shipname: "eShip5",
    Hull: 6,
    Firepower: 2,
    Acurracy:(Math.floor(Math.random() * 3) + 6) / 10,
};

function attack5(ussSchwarzenegger,eShip5) {
    if (ussSchwarzenegger.Firepower < eShip5.Hull) {
        console.log("Target destroyed!");
    } else if (eShip5.Firepower > ussSchwarzengger.Hull) {
        console,log("Damage Taken!")
    } if (eShip5.Firepower < ussSchwarzenegger.Hull) {
        console.log("Ship destroyed! GAME OVER")
    }
};

attack5(ussSchwarzenegger, eShip5);

let eShip6 = {
    Shipname: "eShip6",
    Hull: 3,
    Firepower: 4,
    Acurracy:(Math.floor(Math.random() * 3) + 6) / 10,
};

function attack6(ussSchwarzenegger,eShip6) {
    if (ussSchwarzenegger.Firepower < eShip6.Hull) {
        console.log("Target destroyed!");
    } else if (eShip6.Firepower > ussSchwarzenegger.Hull) {
        console.log("Damage Taken!")
    } if (eShip6.Firepower < ussSchwarzenneger.Hull) {
        console.log("Ship destroyed! GAME OVER")
    }
};

attack6(ussSchwarzenegger, eShip6);

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