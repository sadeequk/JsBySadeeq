// sorting an array in asending and decending order







// let names=['ali','bilal','farman','izhar','zubair'];
// names.sort();
// console.log(names);


// now array with Number

let numberz=[1,3,5,7,8,8,9,6,5,3,0,10,23,44,45,,66];
// numberz.sort();
// console.log(numberz);
numberz.sort(compare);
function compare(a,b){
    // if the return of this function is less the zero then "a" will come first
    //if the return of this function is less  0 then then nothing will be changed
    // if the return of this function is greater then 0 then "b" will come first

    return a - b;
}
console.log(numberz);


// for sorting in desending order ,just chnage the a -b with b -a 

// now in arry of objects
