const palidrome = (str)=>{
    str = str.toLowerCase().replace(/\W/g,"");
    let r_str = str.split("").reverse().join("");

    return str === r_str ?true:false;
}
console.log(palidrome("racecar"));
