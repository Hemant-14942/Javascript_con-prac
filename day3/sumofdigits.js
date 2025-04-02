const sum = (num)=>{
    const arr = Array.from(String(num),Number);
    return arr.reduce((acc , cur)=>acc+=cur,0)
}
console.log(sum(234));
