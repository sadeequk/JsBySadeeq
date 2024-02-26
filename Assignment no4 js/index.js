// Filter Method

// STATEMENT NO# 1
// Filter Even Numbers: Given an array of numbers,
//  use the filter method to create a new array containing only the even numbers.

// I am taking an array of Numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);


// STATEMENT NO# 2
// Filter Adults: Given an array of objects representing people with age properties, 
// use filter to create a new array containing only the adults (e.g., age >= 18).

// I am atking an array of objects
 let array=[
    {
        name: "ali", age: 24
    },
    {
        name: "ahmad", age: 4
    },
    {
        name: "kaamran", age: 17
    },
    {
        name: "bilal", age: 4
    },
    {
        name: "shehzad", age: 45
    },
 ];
 const adults = array.filter(person => person.age >= 18);
 console.log("adults are :", adults);




//  STATMENT NO# 3
// Filter by String Length: Given an array of strings, 
// use the filter method to create a new array containing only the strings with a certain minimum length.

// Ia am taking an Array of strings
const stringArray = ["car", "banana", "apple", "date", "elephant", "pig"];

// Minimum length for filtering
const minLength = 6;

// Use the filter method to create a new array with strings of a certain minimum length
const filteredWords = stringArray.filter(word => word.length >= minLength);

console.log("Strings with a minimum length of", minLength, "characters:", filteredWords);





// STATMENT NO# 4
// Filter Unique Values: Given an array of values, use filter to 
// create a new array containing only the unique values (no duplicates).

// For this i am taking an array which having dublicted Elements
const dublicatedArray=[1,1,2,2,3,4,5,5,6,7,7,77,8,9,10,11,11];
const noDublicatedValues = dublicatedArray.filter((value, index, self) => self.indexOf(value) === index);
console.log(noDublicatedValues);




// STATMENT NO# 5
// Filter Products by Price Range: Given an array of objects representing products with
//  price properties, use filter to create a new array containing only the products within a specific price range.
 
// I am creating an array of objects nmaed as product, which properties like product name and its price

let products=[
    {
        name:"product 1",
        price: 10
    },
    {
        name:"product 2",
        price: 20
    },
    {
        name:"product 3",
        price: 30
    },
    {
        name:"product 4",
        price: 40
    },
    {
        name:"product 5",
        price: 50
    },
    {
        name:"product 6",
        price: 60
    },
    {
        name:"product 7",
        price: 70
    },
    

];

const minPrice=30;
const maxPrice=60;

const PriceRange = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
console.log(PriceRange);


