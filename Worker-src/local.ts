const btn=document.querySelector(".change") as HTMLButtonElement | null;
const back=document.querySelector<HTMLElement>(".back") || null;
if(btn&& back){
btn.addEventListener("click",():void=>
{   
    back.classList.toggle("color");
    const isblack:Boolean=back.classList.contains("color");
    localStorage.setItem("them",String(isblack));   
}
);
}
 const save:string | null=localStorage.getItem("them");
 if(save === "true" && back) back.classList.add("color");