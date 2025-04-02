// destructured is way to unpack array and object and assign to a distinct value
// if we like to skip on the value in array we use additional comma the comma help to emit the value at specific index.
const names = ["hemant", "rohit","dushyant","natansh"]
let [name1,name2,name3,name4] = names;
console.log(name1,name2,name3,name4);
//////////////////////////////
// skip
const aa = ["hemant", "rohit","dushyant","natansh"];
let [a1,b1,,c1] = aa;
console.log(a1,b1,c1);

///////////////////////////////////

const namess = [["hemant", "rohit"],
["dushyant","natansh"]];
let [a,b] = namess;
console.log(a,b);
////////////////////////////////////
let obj = {
    'width':20,
    'height':10,
    'area':200,   
}
let {width,height,area} =obj
console.log(width,height,area);
/////////////////////////// 
// when we are going to destructure the object teh key and properties are goona be same.
