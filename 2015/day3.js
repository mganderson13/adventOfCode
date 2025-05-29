//PART 2
//use data set determine how many houses visited min. once by Santa and Robo-Santa
    //Santa even indices (index % 2 === 0)
    //Robo-Santa odd indices (index % 2 === 1)
//both start at [0,0] each direction moves along grid x/y axis 
    //iterate over data set - if ^  y + 1, > x + 1, < x - 1, down y - 1
//push each ordered pair to same set 
//find set length

//from blog, imports INPUT differently
const fs = require('fs');
const INPUT = fs.readFileSync('./input.txt', 'utf-8').split('');
const santaDirections = INPUT.filter((item, index) => index % 2 === 0);
const roboSantaDirections = INPUT.filter((item, index) => index % 2 === 1);

// Get array of directions and return array of visited coordinates
const traverse = directions => {
  let visitedCoordinates = ['0x0'];
  let currentPosition = {x: 0, y: 0};

  directions.forEach(direction => {
    if (direction === '^') currentPosition.y++;
    if (direction === 'v') currentPosition.y--;
    if (direction === '>') currentPosition.x++;
    if (direction === '<') currentPosition.x--;

    visitedCoordinates.push(`${currentPosition.x}x${currentPosition.y}`);
  });

  return visitedCoordinates;
};

const result = new Set(traverse(santaDirections).concat(traverse(roboSantaDirections))).size;

console.log(result);

//chat gpt code, got same answer as me with original data
function countHousesWithSantaAndRoboSanta(directions) {
    const visitedHouses = new Set();
    let santaPosition = { x: 0, y: 0 };
    let roboPosition = { x: 0, y: 0 };
  
    // Add the starting position to the visited houses
    visitedHouses.add("0,0");
  
    for (let i = 0; i < directions.length; i++) {
      const mover = i % 2 === 0 ? santaPosition : roboPosition; // Alternate turns between Santa and Robo-Santa
  
      switch (directions[i]) {
        case "^":
          mover.y += 1;
          break;
        case "v":
          mover.y -= 1;
          break;
        case ">":
          mover.x += 1;
          break;
        case "<":
          mover.x -= 1;
          break;
      }
  
      // Record the house as visited
      visitedHouses.add(`${mover.x},${mover.y}`);
    }
  
    // The size of the set gives the count of unique houses visited
    return visitedHouses.size;
  }
//my code, there was a problem with importing the data 
function visited2(input) {
    let x = 0;
    let y = 0;
    let a = 0;
    let b = 0;
    const mySet2= new Set();
    mySet2.add(`${x},${y}`);
    const santaArray = [];
    const roboArray = [];

    input.forEach((symbol, index) => {
        if (index % 2 === 0) {
            santaArray.push(symbol);
        }else if (index % 2 === 1) {
            roboArray.push(symbol);
        }
    })
// console.log("santaArray:", santaArray)
// console.log("roboArray:", roboArray)

    santaArray.forEach(symbol => {
        if (symbol === "^") {
            y += 1;
        } else if (symbol === "v") {
            y -= 1;
        } else if (symbol === ">") {
            x += 1;
        } else if (symbol === "<") {
            x -= 1;
        }
        mySet2.add(`${x},${y}`);
    })

    roboArray.forEach(symbol => {
        if (symbol === "^") {
            b += 1;
        } else if (symbol === "v") {
            b -= 1;
        } else if (symbol === ">") {
            a += 1;
        } else if (symbol === "<") {
            a -= 1;
        }
        mySet2.add(`${a},${b}`);
    })

    console.log('mySet2:', mySet2.size);
}

// PART 1
// use data set to determine how many houses got visited at least once
// start at [0,0] each direction moves along grid x/y axis 
//     iterate over data set - if ^  y + 1, > x + 1, < x - 1, down y - 1
// push each ordered pair to a set 
// find set length

// function visited(input) {
//     let x = 0;
//     let y = 0;
//     const mySet= new Set();
//     mySet.add(`${x},${y}`);

//     const directions = input.split('');
//     directions.forEach(symbol => {
//         if (symbol === "^") {
//             y += 1;
//         } else if (symbol === "v") {
//             y -= 1;
//         } else if (symbol === ">") {
//             x += 1;
//         } else if (symbol === "<") {
//             x -= 1;
//         }
//         mySet.add(`${x},${y}`);
//     })
//     console.log('mySet:', mySet.size);
// }


// visited(INPUT);
visited2(INPUT);
console.log(countHousesWithSantaAndRoboSanta(INPUT));