const btn=document.querySelector(".change");
const back=document.querySelector(".back")

btn.addEventListener("click",()=>
{   
    back.classList.toggle("color");
    const isblack=back.classList.contains("color");
    localStorage.setItem("them",isblack);   
}
);
 const save=localStorage.getItem("them");
 if(save === "true") back.classList.add("color");

