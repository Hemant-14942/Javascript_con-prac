//whenever we do not define parameters in the function there is default varaiable get initialized named as arguments for one input
//  it work as variable and for multiple value it act as array
function sum(){
    sum=0;
    for(let i=0; i< arguments.length ; i++){
        sum =sum + arguments[i];
    }
    return sum;
}
const total = sum(1,2,4,3,5);
console.log(total);