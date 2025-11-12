// console.log(countries)
// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')


// let arr = [5, 4 , 3, "One", "Two"]
// let numbers = [10, 20, 30, 40, 50, 60, 70];


// console.log(arr)

// console.log(numbers.length)

// console.log(arr[0], arr[2], arr[4])

// let mixedDataTypes = [25, "ChatGPT", true, null, { language: "JS" }, [1, 2, 3]];
// console.log("Length of mixedDataTypes:", mixedDataTypes.length);

// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// console.log(itCompanies)
// console.log(itCompanies.length)


// let first = itCompanies[0]
// let second = itCompanies[Math.floor(itCompanies.length / 2)]
// let third = itCompanies[itCompanies.length-1]

// console.log(first)
// console.log(second)
// console.log(third)

// for ( let company of itCompanies){
//     console.log(company)
// }

// for(let company of itCompanies){
//     console.log(company.toUpperCase())
// }

// console.log(itCompanies.join(", ") + "are big IT companies")

// let companyToCheck = "Google";
// if (itCompanies.includes(companyToCheck)) {
//   console.log(`${companyToCheck} exists in the array.`);
// } else {
//   console.log("Company not found.");
// }


// let companiesWithOneO = [];
// for (let company of itCompanies){
//     let count = 0;
//   for (let char of company.toLowerCase()) {
//     if (char === 'o') count++;
//   }
//   if (count <= 1) companiesWithOneO.push(company);
// }
// console.log("Companies with one or no 'o':", companiesWithOneO);

// console.log(itCompanies.sort())

// console.log(itCompanies.reverse())

// console.log(itCompanies.splice(0,3))
// console.log(itCompanies.splice(-3))

// let midIndex = Math.floor(itCompanies.length / 2);
// if (itCompanies.length % 2 === 0) {
//   console.log("Middle companies:", itCompanies.slice(midIndex - 1, midIndex + 1));
// } else {
//   console.log("Middle company:", itCompanies[midIndex]);
// }

// console.log("After removing first company:", itCompanies);



// let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// let arr = text.replace(/[.,]/g, " ").split(' ')

// console.log(arr)

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// if(!shoppingCart.includes("Meat")){
//     shoppingCart.unshift("Meat")
// }

// if(!shoppingCart.includes("Sugar")){
//     shoppingCart.push("Sugar")
// }

// shoppingCart.splice(shoppingCart.indexOf("Honey"), 1)
// shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea"


// console.log(shoppingCart);

// `In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.`


// if(countries.includes('Ethiopia')){
//     console.log("ETHIOPIA")
// }
// else{
//     countries.push('ETHIOPIA')
// }

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// let fullStack = frontEnd.concat(backEnd)


// console.log(fullStack)

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// //Sort the array and find the min and max age
// ages.sort()
// const minAge = ages[0]
// const maxAge = ages[ages.length -1]

// console.log(ages)
// console.log(minAge)
// console.log(maxAge)

//Find the median age(one middle item or two middle items divided by two)
// let medianAge;

// if (ages.length % 2 == 0){
//     medianAge = (ages[ages.length / 2-1] + ages[ages.length/2])/2
// }
// else{
//     medianAge = Math.square(ages[ages.length / 2])
// }

// console.log(medianAge)

// let sum = 0;

// for(let i=0; i < ages.length; i++){
//     sum += ages[i]
// }

// let avg = sum / ages.length

// console.log(avg)

// let max = ages[ages.length - 1]
// let min = ages[0]

// let range = max-min
// console.log(range)

// console.log(countries.slice(0, 10))

// const median = Math.floor(countries.length / 2)

// console.log(countries[median])
`Merge two arrays [1, 2, 3] and [4, 5, 6] into one array.

Remove duplicates from [1, 2, 2, 3, 4, 4, 5].

Reverse an array without using .reverse() (use a loop).

Given const arr = ['a', 'b', 'c', 'd', 'e'], remove the 2nd and 3rd elements using .splice().

Find the maximum and minimum numbers in [3, 9, 1, 5, 6, 8].

Write a function that takes an array of numbers and returns a new array containing only the positive ones.

Create an array of words and count how many contain the letter 'a'.`

// const num = [1, 2, 2, 3, 4, 4, 5]


// for(let i=0; i < num.length; i++){
//     if(!unique.includes(num[i])){
//         unique.push(num[i])
//     }
// }

// console.log(unique)

// let reverse = []

// for(let i=num.length - 1; i >= 0; i--){
//     reverse.push(num[i])
// }

// console.log(reverse)


// console.log(num.length)
// console.log(num.length - 1)

// const arr = ['a', 'b', 'c', 'd', 'e']
// arr.splice(1, 2)
// console.log(arr)

// const num = [3, 9, 1, 5, 6, 8]
// num.sort()

// let min = num[0]
// let max = num[num.length -1]

// console.log(min, max)



// function positive(array){
//     const result = []

//     for(let num of array){
//         if(num > 0){
//             result.push(num)
//         }
//     }
//     return result
// }

// console.log(positive([1, -2, 3, 5, 6]))

// const words = ['apple', 'banana', 'cherry', 'kiwi', 'grape'];
// let count = 0

// for(let i=0; i<words.length;i++){
//     if(words[i].includes('a')){
//         count++
//     }
// }

// console.log(count)