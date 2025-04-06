const alg = (num)=>{
    let val = num.toString();
    val = val.split("");
    val = val.reverse();
    let arr = val.map((curr,ind)=>{
         curr = parseInt(curr);
        return (ind % 2 !== 0) ? curr * 2 : curr;
    })
    arr = arr.map((curr,ind)=>{
        return (curr >9) ? curr-9: curr;
    })
   const ans = arr.reduce((acc, curr) => {
    return acc + curr;
    }, 0); 
    return (ans%10==0)?"valid":"not valid"

}
console.log(alg(2375));
