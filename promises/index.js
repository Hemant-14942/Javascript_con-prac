function orderDelivered(status){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(status=="success"){
                console.log("order deliver");
            }else{
                console.log("not delivered");
                
            }
        },2000)
    });
}
orderDelivered("success")
    .then((message)=>{
        console.log(message);
        
    })
    .catch((error)=>{
        console.log(error);
        
    })
    .finally(()=>{
        console.log("done kaam");
        
    })