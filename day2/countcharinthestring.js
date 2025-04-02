function count(s,c){
    let st = s.toLowerCase();
    let ch = c.toLowerCase();
    let totalc = st.split("").reduce((acc,curr)=>{
        if(curr==ch){
            acc=acc+1;
        }
        return acc;       
    },0);
    return totalc;
}
console.log(count("hemantiitt",'t'));