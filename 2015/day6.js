// receive instructions with "turn off", "turn on", or "toggle" before coordinates of square
// toggle means switch all lights 
// coordinates make square so 0,0 - 2,2 is 0,0 0,1 0,2 1,0 1,1 1,2 2,0 2,1 2,2
// on=true off=false
// set up grid x,y = 0,0 - 999,999
// need to split into array, with directionsArrays
// if directionsArray.length = 5 = turn on or turn off
// if directionsArray.length = 4 = toggle 
// OR
// use .includes, then find index 2 or 3 and 4 or 5
// create Set with coordinates: value pairs 
// 
// if turn on = true
// if turn off = false
// if toggle = !coordinate 

const fs = require('fs');
const INPUT = fs.readFileSync('./input.txt', 'utf-8').split("\n");

function brightness2(input) {
    const matrix = Array.from({ length: 1000 }, () => Array(1000).fill(0));
    let brightnessCount = 0;

    input.forEach(direction => {
        const parts = direction.split(" ");
        const command = parts[0] === "toggle"
            ? "toggle"
            : parts[1] === "on"
            ? "turn on"
            : "turn off";

        const [a, b] = parts[parts.length - 3].split(",").map(Number);
        const [c, d] = parts[parts.length - 1].split(",").map(Number);

        for (let i = a; i <= c; i++) {
            for (let j = b; j <= d; j++) {
                if (command === "turn off") {
                    matrix[i][j] = Math.max(matrix[i][j] - 1, 0);
                } else if (command === "turn on") {
                    matrix[i][j] += 1;
                } else if (command === "toggle") {
                    matrix[i][j] += 2;
                }
            }
        }
    });

    brightnessCount = matrix.flat().reduce((sum, val) => sum + val, 0);
    console.log(brightnessCount);
}
//brightness2(INPUT);


//PART 2
function brightness(input) {

    let matrix = [];
    let directionsArray = [];
    let coordinates;
    let brightnessCount = 0;

    function createMatrix(rows, cols) {
    
        for (let i = 0; i < rows; i++) {
          matrix[i] = new Array(cols).fill(0); 
        }
    }
    createMatrix(1000, 1000);

    input.forEach(direction => {
     directionsArray.push(direction.split(" "))
    })

    for (let i=0; i<directionsArray.length; i++) {
       if (directionsArray[i].length === 5) {
        //take coordinates from index 2 and index 4
        coordinates = directionsArray[i][2].split(",").concat(directionsArray[i][4].split(","));
    }else {
        coordinates = directionsArray[i][1].split(",").concat(directionsArray[i][3].split(","));
    }
        let a = parseInt(coordinates[0]);
        let b = parseInt(coordinates[1]);
        let c = parseInt(coordinates[2]);
        let d = parseInt(coordinates[3]);
       //starting at matrix[a][b] loop through to make a square of coordinates
       for (let k = a; k <= c; k++) {
        for (let j = b; j <= d; j++) {
            if (directionsArray[i].includes("off")) {
                matrix[k][j] = Math.max(matrix[k][j] - 1, 0);
            }else if (directionsArray[i].includes("on")) {
                matrix[k][j] += 1;
            }else {
                matrix[k][j] += 2;
            }
        }
       }
    }
    
    brightnessCount = matrix.flat().reduce((sum, val) => sum + val, 0);
    console.log(brightnessCount);
}
brightness(INPUT);


//PART 1
function lights(input) {

    let matrix = [];
    let directionsArray = [];
    let coordinates;
    let lightsON = 0;

    function createMatrix(rows, cols) {
    
        for (let i = 0; i < rows; i++) {
          matrix[i] = new Array(cols).fill(false); 
        }
    }
    createMatrix(1000, 1000);

    input.forEach(direction => {
     directionsArray.push(direction.split(" "))
    })

    for (let i=0; i<directionsArray.length; i++) {
       if (directionsArray[i].length === 5) {
        //take coordinates from index 2 and index 4
        coordinates = directionsArray[i][2].split(",").concat(directionsArray[i][4].split(","));
    }else {
        coordinates = directionsArray[i][1].split(",").concat(directionsArray[i][3].split(","));
    }
        let a = parseInt(coordinates[0]);
        let b = parseInt(coordinates[1]);
        let c = parseInt(coordinates[2]);
        let d = parseInt(coordinates[3]);
       //starting at matrix[a][b] loop through to make a square of coordinates
       for (let k = a; k <= c; k++) {
        for (let j = b; j <= d; j++) {
            if (directionsArray[i].includes("off")) {
                matrix[k][j] = false;
            }else if (directionsArray[i].includes("on")) {
                matrix[k][j] = true;
            }else {
                matrix[k][j] = !matrix[k][j];
            }
        }
       }
    }
    
    matrix.flat().forEach(coordinate => {
        if (coordinate === true) {
            ++lightsON
        }
    })
    console.log(lightsON);
}
// lights(INPUT);
