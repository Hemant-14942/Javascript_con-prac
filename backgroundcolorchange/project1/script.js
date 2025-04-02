const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const randomcolor = "#"+ Math.floor(Math.random()*1677216).toString(16);
    document.body.style.backgroundColor = randomcolor;
    
});