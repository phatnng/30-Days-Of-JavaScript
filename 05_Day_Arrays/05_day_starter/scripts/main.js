// console.log(countries)
// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')


let arr = [5, 4 , 3, "One", "Two"]
let numbers = [10, 20, 30, 40, 50, 60, 70];


console.log(arr)

console.log(numbers.length)

console.log(arr[0], arr[2], arr[4])

let mixedDataTypes = [25, "ChatGPT", true, null, { language: "JS" }, [1, 2, 3]];
console.log("Length of mixedDataTypes:", mixedDataTypes.length);

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies)
console.log(itCompanies.length)


let first = itCompanies[0]
let second = itCompanies[Math.floor(itCompanies.length / 2)]
let third = itCompanies[itCompanies.length-1]

console.log(first)
console.log(second)
console.log(third)

for ( let company of itCompanies){
    console.log(company)
}

for(let company of itCompanies){
    console.log(company.toUpperCase())
}

console.log(itCompanies.join(", ") + "are big IT companies")

let companyToCheck = "Google";
if (itCompanies.includes(companyToCheck)) {
  console.log(`${companyToCheck} exists in the array.`);
} else {
  console.log("Company not found.");
}


let companiesWithOneO = [];
for (let company of itCompanies){
    let count = 0;
  for (let char of company.toLowerCase()) {
    if (char === 'o') count++;
  }
  if (count <= 1) companiesWithOneO.push(company);
}
console.log("Companies with one or no 'o':", companiesWithOneO);

console.log(itCompanies.sort())

console.log(itCompanies.reverse())

console.log(itCompanies.splice(0,3))
console.log(itCompanies.splice(-3))

let midIndex = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 === 0) {
  console.log("Middle companies:", itCompanies.slice(midIndex - 1, midIndex + 1));
} else {
  console.log("Middle company:", itCompanies[midIndex]);
}

console.log("After removing first company:", itCompanies);

