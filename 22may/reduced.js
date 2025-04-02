/**reduced defination**/
// reduced takes a calback function,callback function takes accumulator ,current and optional initial value as parameterand return a single value;
const numb = [1,2,3,4,5];
const vari = numb.reduce((acc,curn)=>acc+curn);
console.log(vari);
// //////////////
const numb1 = [1,2,3,4,5];
const vari1 = numb.reduce((acc,curn)=>acc+curn,10);
console.log(vari1);



// for each
// iterate an array element we use for each only with array it takes a callback function with element ,index parametr and array itself .index and array are optiona.
const num1 =[1,2,3,4,5,6]
num1.forEach((num)=> console.log(num));
const num2 =[1,2,3,4,5,6]
let sum=0;
num1.forEach((num)=>{
    sum+=num;

});console.log(sum);

// sort();
// the sort method arrange the array element in either in asscending or descending order.
// by default the sort values are in string
const arr =["hahha","jqnaj","acnsjc"];
console.log(arr.sort());