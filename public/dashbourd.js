const bars =document.getElementById("bars");
const horizontalNav =document.getElementById("hnav");
const verticalNav =document.getElementById("vnav");
bars.addEventListener("click",()=>{
    horizontalNav.classList.add("w-[75%]");
    horizontalNav.classList.remove("w-full");
    

});