////////////////////// ROVER

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []  
}
// EL SEGUNDO ROBER SOLO SE PUEDE COLOCAR, NO MOVER (DE MOMENTO)
var rover2 = { 
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
} 


//////////////////////// 

var obstacleX = null;
var obstacleY = null;

function positionLog () {
  console.log("Rover position is [" + rover.x + ", " + rover.y + "]");
};
function errorLog () {
  console.log("Error, no puedes avanzar fuera del cuadrante");
};
function errorObstacleLog() {
  console.log("Lo siento, no puedes avanzar sobre ese terreno");
};
function randomNumber() {
  return Math.floor(Math.random() * 10);
};
function pushTravelLog() {
  rover.travelLog.push([rover.x, rover.y]);
};


//////////////////////// START

function placeRover () {
 rover.x = randomNumber();
 rover.y = randomNumber();
 rover.direction = "N";
 rover.travelLog = [];
 console.log(rover);
};
function placeRover2 () {
 rover2.x = randomNumber();
 rover2.y = randomNumber();
 rover2.direction = "N";
 rover2.travelLog = [];
 console.log(rover2);
};
function placeObstacle() {
  obstacleX = randomNumber();
  obstacleY = randomNumber();
  console.log("Obstacle placed: [" + obstacleX + ", " + obstacleY + "]")
};


////////////////////// MOVEMENT 

function turnLeft(rover) {
  console.log("turnLeft was called!");
  if (rover.direction === "N") {
    rover.direction = "W";
  } else if (rover.direction === "W") {
    rover.direction = "S";
  } else if (rover.direction === "S") {
    rover.direction = "E";
  } else if (rover.direction === "E") {
    rover.direction = "N";
  }
};
function turnRight(rover) {
  console.log("turnRight was called!");
  if (rover.direction === "N") {
    rover.direction = "E";
  } else if (rover.direction === "E") {
    rover.direction = "S";
  } else if (rover.direction === "S") {
    rover.direction = "W";
  } else if (rover.direction === "W") {
    rover.direction = "N";
  }
};
function moveForward(rover) {
  console.log("moveForward was called")
  if (rover.direction === "N") {
    if (rover.y === 0) {
      errorLog();
    } else if ((rover.x === obstacleX && rover.y - 1 === obstacleY) || (rover.x === rover2.x && rover.y - 1 === rover2.y)) {
      errorObstacleLog();
    } else {
      rover.y = rover.y - 1; 
      positionLog();
      pushTravelLog();
    } 
  } else if (rover.direction === "S") {
    if (rover.y === 9) {
      errorLog();
    } else if ((rover.x === obstacleX && rover.y + 1 === obstacleY) || (rover.x === rover2.x && rover.y + 1 === rover2.y)) {
      errorObstacleLog();
    } else {
      rover.y = rover.y + 1;
      positionLog();
      pushTravelLog();
    }    
  } else if (rover.direction === "E") {
    if (rover.x === 9) {
      errorLog();
    } else if ((rover.x + 1 === obstacleX && rover.y === obstacleY) || (rover.x + 1 === rover2.x && rover.y === rover2.y)) {
      errorObstacleLog();
    } else {
      rover.x = rover.x + 1;
      positionLog();
      pushTravelLog();
    }
  } else if (rover.direction === "W") {
    if (rover.x === 0) {
      errorLog();
    } else if ((rover.x - 1 === obstacleX && rover.y === obstacleY) || (rover.x === rover2.x - 1 && rover.y === rover2.y)) {
      errorObstacleLog();
    } else {
      rover.x = rover.x - 1;
      positionLog();
      pushTravelLog();
    }
  }
};
function moveBackwards(rover) {
  console.log("moveBackwards was called")
  if (rover.direction === "N") {
    if (rover.y === 9) {
      errorLog();
    } else if ((rover.x === obstacleX && rover.y + 1 === obstacleY) || (rover.x === rover2.x && rover.y + 1 === rover2.y)) {
      errorObstacleLog();
    } else {
      rover.y = rover.y + 1; 
      positionLog();
      pushTravelLog();
    } 
  } else if (rover.direction === "S") {
    if (rover.y === 0) {
      errorLog();
    } else if ((rover.x === obstacleX && rover.y - 1 === obstacleY) || (rover.x === rover2.x && rover.y - 1 === rover2.y)) {
      errorObstacleLog();
    } else {
      rover.y = rover.y - 1;
      positionLog();
      pushTravelLog();
    }    
  } else if (rover.direction === "E") {
    if (rover.x === 0) {
      errorLog();
    } else if ((rover.x - 1 === obstacleX && rover.y === obstacleY) || (rover.x - 1 === rover2.x && rover.y === rover2.y)) {
      errorObstacleLog();
    } else {
      rover.x = rover.x - 1;
      positionLog();
      pushTravelLog();
    }
  } else if (rover.direction === "W") {
    if (rover.x === 9) {
      errorLog();
    } else if ((rover.x + 1 === obstacleX && rover.y === obstacleY) || (rover.x + 1 === rover2.x && rover.y === rover2.y)) {
      errorObstacleLog();
    } else {
      rover.x = rover.x + 1;
      positionLog();
      pushTravelLog();
    }
  }
};


////////////////////// ORDER

 function roverObey (string) {
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== "f" && string[i] !== "b" && string[i] !== "r" && string[i] !== "l" ) {
      console.log("Comando no válido. Inserte solamente los caracteres f,b,r o l, por favor.")
    } else {
      if (string[i] === "f") {
        moveForward(rover);
      } else if (string[i] === "b") {
        moveBackwards(rover);
      } else if (string[i] === "r") {
        turnRight(rover);
      } else if (string[i] === "l") {
        turnLeft(rover);
      } 
    } 
  }
}; 


