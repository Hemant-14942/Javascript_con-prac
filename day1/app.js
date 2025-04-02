let maxl =0;
let ans = "#";
function sinp(s){
    const arr = s.split(" ");
    if(s.trim().length==0 || s.length>280){
        return false;
    }
    // console.log(arr);
     arr.forEach((ele) => {
        if (ele.length !== 0) {
            let cap = ele.charAt(0).toUpperCase() + ele.slice(1);
            ans+=cap;
        }
    });
    return ans; 
}

console.log(sinp("hello0     world i am here"));

koi string input wala function banana h jisme output dena h string # k sath start ho aur sare word ka pehla character capital ho air string  charatcer 280 se kmm hone chahiye