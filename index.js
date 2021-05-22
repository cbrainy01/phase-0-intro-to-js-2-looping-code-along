// Code your solutions in this file
function countDown(num) {
while (num >= 0) {
    console.log(num--);
    }
}

const names = [];


function writeCards(names, event) {

    const newArray = [];

    for(let i = 0; i < names.length; i++) {
newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
}

return newArray;
}




























// let num = undefined;
// function countDown(num) {
// console.log(num);
// while(num > 0) {
// console.log(num -= 1);
// }

// }