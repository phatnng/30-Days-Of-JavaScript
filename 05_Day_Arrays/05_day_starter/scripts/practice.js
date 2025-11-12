`Create a new array that contains the square of each number in [1, 2, 3, 4, 5].
(Example output: [1, 4, 9, 16, 25])`

// const num = [1, 2, 3, 4, 5]
// const double = []
// for(let i=0; i<num.length; i++){
//     double.push(num[i]**2)
// }

// console.log(double)


//2️⃣ Create a new array that contains only the odd numbers from [2, 5, 8, 11, 14, 17].

// const num =  [2, 5, 8, 11, 14, 17]

// const oddNum = []

// for(let i=0; i < num.length; i++){
//     if(num[i] % 2 !==0){
//         oddNum.push(num[i])
//     }
// }
// console.log(oddNum)

//Given const nums = [1, 2, 3, 2, 4, 1, 5], create a new array that has no duplicates (no Set allowed).

// const nums = [1, 2, 3, 2, 4, 1, 5]
// const unique = []
// for(let i=0; i<nums.length;i++){
//     if(!unique.includes(nums[i])){
//         unique.push(nums[i])
//     }

// }

// console.log(unique)

//Reverse [10, 20, 30, 40, 50] without using .reverse().

// const num = [10, 20, 30, 40, 50]
// const reverse = []

// for(let i=num.length -1; i >= 0; i--){
//     reverse.push(num[i])
// }

// console.log(reverse)

//Find the largest number in [8, 3, 14, 5, 7, 10]

// const num = [8, 3, 14, 5, 7, 10]
// let largest = num[0]

// for(let i=0; i < num.length; i++){
//     if(num[i] > largest){
//         largest = num[i]
//     }
// }

// console.log(largest)


//Merge two arrays [‘a’, ‘b’, ‘c’] and [‘d’, ‘e’, ‘f’] manually using a loop.
// const arrOne =  ['a', 'b', 'c']
// const arrTwo = ['d', 'e', 'f']
// const merge = []

// for(let i=0; i<arrOne.length; i++){
//     merge.push(arrOne[i])
// }

// for(let i=0; i<arrTwo.length; i++){
//     merge.push(arrTwo[i])
// }


// console.log(merge)

//Find index of first even number

// const nums = [1, 3, 7, 4, 9, 2];
// let index = -1

// for(let i=0; i<nums.length; i++){
//     if(nums[i] % 2 ==0){
//         index = i
//         break
//     }
// }

// console.log(index)

//8️⃣ Words with more than 4 letters
// const words = ['apple', 'banana', 'grape', 'kiwi', 'pear'];
// const wordLength = []

// for(let i=0; i<words.length; i++){
//     if(words[i].length > 4){
//         wordLength.push(words[i])
//     }
// }

// console.log(wordLength)

// const nums = [5, -3, 0, 8, -2, 7];
// const positiveNum = []


// for(let i=0; i < nums.length; i++){
//      if(nums[i] > 0){
//         positiveNum.push(nums[i])
//      }
// }

// console.log(positiveNum)


// //🔟 Count names starting with 'B'
// const names = ['Bob', 'Alice', 'Ben', 'Charlie'];
// let count = 0;

// for(let i=0; i < names.length; i++){
//     if(names[i].startsWith("B")){
//         count++
//     }
// }

// console.log(count)

//Write a program that counts how many vowels (a, e, i, o, u) are in a word.


// function vowelCheck(string){
//     let count = 0
//     for(let i=0; i < string.length; i++){
//         if("aeiou".includes(string[i].toLowerCase())){
//             count++
//         }
//     }
//     return count
// }

// console.log(vowelCheck('banana'))


// const student = { name: "Phat", age: 22, grades: [85, 90, 78] }
// student.major = "computer science"
// let sum = 0
// for(let i =0; i<student.grades[i]; i++){
//     sum += student.grades[i]
// }

// let avg = sum / student.grades.length
// console.log(avg)
// console.log(student)

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];


// let sum = 0

// for (let i = 0; i < matrix.length; i++){
//     for(let j = 0 ; j < matrix[i].length; j++){
//         console.log(matrix[i][j])
//         sum += matrix[i][j]
//     }
// }

// console.log(sum)


const grid = [
  [10, 20],
  [30, 40]
];


for(let i =0; i < grid.length; i++){
    for(let j=0; j < grid[i].length; j++){
        console.log(`Value ${grid[i][j]} is at position (${i}, ${j})`);
    }
}