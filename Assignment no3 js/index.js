// Find Array Method 

// STATEMENT NO# 1
// Find the First Even Number: Given an array of numbers, use the find method to locate and return the first even number in the array.

// ARRAY
let sadeeq=[1,2,3,4,5,6,7,8,9,10]
//  now , to find first even number by "find array method"

let firstEven =sadeeq.find(sadeeq => sadeeq % 2 === 0);
console.log(firstEven)







// STATEMENT NO# 2

//Find a Specific Object: Given an array of objects with various properties,
// use find to locate an object with a specific property value (e.g., find a person with a certain age or name).

// ARRAY of objects (persons)
let persons =[
    {
    name:"Ahmad" ,
    age:2
    },
    {
    name:"Ali" ,
    age:34
    },
    {
    name:"Bilal",
    age:24
     },
     {       
     name:"Arshad" ,
    age:35
    },

];

const age=34;

const targetAge=persons.find(persons => persons.age===age)

console.log(age);
console.log(targetAge.name);



// STATMENT NO# 3
// Find Prime Numbers: Write a function that uses the find method to 
// locate and return the first prime number from an array of numbers.

// PRIME NUMBERS:- Numbers greater then one which are only divisible by 1 and itself only

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// ARRAY OF NUMBERS


// Function for checking either the  number is prime or not 
 function prime(number){
  if (number < 1)
  {
    return false;
 }
 if (number <= 3)
 {
   return true;
}
if (number % 2 === 0 || number % 2 === 0 )
{
return false;
}
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const firstPrime=numbers.find(prime);
console.log(firstPrime);



// STATMENT N0# 4
// Find Longest Word: Given an array of strings, use the find method to find and return the longest word in the array.
let words =["apple","mango", "banana","redcherry"]


let longestWord=words.find(word => {
    return word.length === Math.max(...words.map(word => word.length));
});
console.log(longestWord)



// STATEMENT NO# 5
// Find Missing Element: Given two arrays, one containing all the elements and 
// the other missing one element, use find to locate and return the missing element.


// I am taking two arrays ,one array which have all the elements and other contain 1 missing elements
const allElements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const missingElementArray = [1, 2, 3, 4, 5,7, 8, 9];
const missingElement = allElements.find(element => !missingElementArray.includes(element));
console.log(missingElement)


// if (missingElement !== undefined) {
//   console.log("The missing element is:", missingElement);
// } else {
//   console.log("No missing element found.");
// }