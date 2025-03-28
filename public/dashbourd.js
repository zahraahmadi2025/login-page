const bars =document.getElementById("bars");
const horizontalNav =document.getElementById("hnav");
const verticalNav =document.getElementById("vnav");
const close =document.getElementById("close");
bars.addEventListener("click",()=>{
    horizontalNav.classList.add("w-[75%]");
    horizontalNav.classList.remove("w-full");
    verticalNav.classList.remove("hidden");
    bars.style.display ="none";
    close.style.display="block";


    

});