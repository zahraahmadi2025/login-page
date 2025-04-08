const bars = document.getElementById("bars");
const vnav =document.getElementById("vnav");
const hnav =document.getElementById("hnav");
bars.addEventListener("click",()=>{
  if(hnav.classList.contains("w-full")){
  hnav.classList.add("w-[80%]");
 hnav.classList.remove("w-full");
 vnav.classList.remove("hidden");
vnav.classList.add("flex");
  }
 else{
 hnav.classList.add("w-full");
hnav.classList.remove("w-[80%]");
vnav.classList.remove("flex");
vnav.classList.add("hidden");
 }

});