function bmi(w , h){
   let  ans = w /(Math.pow(h,2));
   if(ans<18.5){
    return console.log("underweight");
   }
    if(18.5<ans<24.9){
       return console.log("normal weight");
   }
    if(25<ans>29.9){
       return console.log("overweight");
   }
    if(ans>30){
       return console.log("obese");
   }
}
console.log(bmi(39,30));