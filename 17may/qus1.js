let number=prompt("no. here:-");
function variabl (number){
   let alpha = []
    for(let i=1;i<27;i++){
       alpha[i]=String.fromCharCode(64+i)
    }
 
    return  alpha[number]
}
let ans= variabl(number)
console.log(number+" "+ans)