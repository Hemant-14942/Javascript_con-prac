const ans = (arr) =>{
    return  arr.map((ele,ind)=>ele*ele).reduce((acc,crr)=>acc+=crr,0);
}
console.log(ans([1,2,3]));
