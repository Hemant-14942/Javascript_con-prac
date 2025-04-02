// function div(a,b){
//     console.log(a/b);
    
// }
// div(2,1);
// div(3,0)

function diverror(a,b){
    try{
        if(b==0){
            throw new Error("cant divide bro");
            
        }
        console.log(a/b);
    }catch(error){
        console.log(error);
        
    }
}
diverror(2,4)
// diverror(2,0)