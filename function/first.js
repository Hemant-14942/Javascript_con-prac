// let num = (a,b)=>{
//     return (a)+(b);
// }
// console.log(num(2,3));

const obj = {
    a:2,
    b:3,
    key:(a,b)=>{
        return a+b;
    }

};
console.log(obj.key(obj.a,obj.b));

let a =[];
let f1 = ()=>{
    return "hello1";
};
let f2 = ()=>{
    return "hello2";
};
a.push(f1());
a.push(f2());
// console.log(a);

// function greet( name){
//     const name1 = name;
//     return function(){
//         console.log("hello "+name1);
//     }
// }
// greet("sachin")();
function sayHello(name) {
    console.log(`Hello, ${name}!`);
}

function processName(callback) { 
    const userName = "Alice";
    callback(userName);
}

// Practice
processName(sayHello);



