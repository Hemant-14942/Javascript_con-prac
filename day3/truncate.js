const ans = (str , num)=>{
  const arr = str.split("");
  const newarr = arr.slice(0,num);
  let s = newarr.join("");
  return s;
}
console.log(ans("hemat is  good ReportBody",4));