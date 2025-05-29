const crypto = require('crypto');
//console.log(typeof crypto.createHash('md5').update('abcdef609043').digest('hex'))
// const input= 'abcdef';
// const answer = 609043
// const hashString = crypto.createHash('md5').update(`${input}${answer}`).digest('hex')
// console.log(hashString)
// ckczppom 

//take input of secret code 
//run through answer #s until indexes 0-5 of hash === 0 
//return answer



function findAnswer(input) {
    let answer = 0
    let hashString = ""
    while (hashString.slice(0, 6) !== ('000000')) {
        answer++ 
        hashString = crypto.createHash('md5').update(`${input}${answer}`).digest('hex')
    }
    return answer;
    }
    console.log(findAnswer('ckczppom'));

    // console.log(findAnswer(input))
    // console.log(findAnswer(input).slice(0, 5))





    // console.log(`input is: ${input}`);


// let input = 0

// function findAnswer(input) {
//     return crypto.createHash('md5').update(`abcdef${input}`).digest('hex')
//     }

//     // console.log(findAnswer(input))
//     // console.log(findAnswer(input).slice(0, 5))



//     while (findAnswer(input).slice(0, 5) !== ('00000')) {
//         input++ 
//     }

//     console.log(`input is: ${input}`);
module.exports = findAnswer;