// 
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// for (let i = 0; i <= countries.length - 1; i++){
//     console.log(countries[i].join(", "));
// }

// let i = countries.length
// while(i){
//     console.log(countries[i])
//     i--;
// }


let pattern = ""
for(let i = 1; i < 7; i++){
    pattern += "#"
    console.log(pattern)
}

// for (let i = 1; i < 11; i++){
//     let a = i * i;
//     console.log(i + " x " + i + " = " + a)
// }

// console.log("i\t i^2\t i^3"); // Header

// for(let i=0; i<11;i++){
//     console.log(`${i}\t ${i**2} \t ${i**3}`)
// }

// for(let i=0; i < 101; i++){
//     if (i%2 == 0){
//         console.log(i)
//     }
// }

// for(let i=0; i<101; i++){
//     if (i%2 !== 0){
//         console.log(i)
//     }
// }

// let sum = 0;

// for (let i=0; i<=100; i++){
//     sum += i;
// }

// console.log(sum)


`Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.`

let evenSum = 0;
let addSum = 0;
// for (let i=0; i<=100; i++){
//     if (i % 2 == 0){
//         evenSum += i
//     }
//     else if(i % 2 !== 0){
//         addSum += i
//     }
// }

// console.log(`The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all adds from 0 to 100 is ${addSum}`)


// const tArr = [];
// for (let i=0; i<=100; i++){
//     if (i % 2 == 0){
//         evenSum += i
//     }
//     else if(i % 2 !== 0){
//         addSum += i
//     }
// }
// tArr.push(evenSum)
// tArr.push(addSum)

// console.log(tArr)


// const randomArray = []
// for (let i = 0; i < 6; i++){
//     randomArray.push(Math.floor(Math.random() * 100))
// }

// console.log(randomArray)

// const uniqueArray = []
// while (uniqueArray.length < 5) {
//   let num = Math.floor(Math.random() * 100);
//   if (!uniqueArray.includes(num)) {
//     uniqueArray.push(num);
//   }
// }


// console.log(uniqueArray)

let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let id = '';

for(let i=0; i<6; i++){
  let randomIndex = Math.floor(Math.random() * chars.length)
  id +=(chars[randomIndex])
}

console.log(id)