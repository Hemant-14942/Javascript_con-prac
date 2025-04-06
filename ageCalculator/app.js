let totalMiliSec = 24*60*60*1000;
const Age = (date)=>{
    let userD = new Date(date);
    let crntD = new Date();
    let diff = crntD.getFullYear()-userD.getFullYear();
    let currMonth = crntD.getMonth();
    let userDMonth = userD.getMonth();
    // console.log(currMonth,userDMonth);
    
    if(currMonth<userDMonth){
        diff--;
    }
    return diff;
}
console.log(Age("2016-5-29"));
