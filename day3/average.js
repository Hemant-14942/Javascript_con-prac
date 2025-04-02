const avg = (arr)=>{
    const sum = arr.reduce((accu,curr)=>{
        return accu + curr;
    },0);
    return sum/arr.length;
}
let c = avg([2,3,4,5]);
console.log(c);

