import { mydata } from "./type.js";
import axios from 'axios';
async function getqoutes() :Promise<mydata[]>{
    try{
    const response=await axios.get<mydata[]>("https://mimic-server-api.vercel.app/quotes");
    return response.data;
    }
    catch(error){
        console.log("API ERROR",error);
        return [];
    }
}
async function display(): Promise<void>{
    const quotes=await getqoutes();
    localStorage.setItem("myquotes",JSON.stringify(quotes)); 

    const storedata=localStorage.getItem("myquotes");
    console.log(storedata);
    
    if(storedata){
        const quote:mydata[]=JSON.parse(storedata);
        const container=document.querySelector(".container") as HTMLElement;
        if(container){
            container.innerHTML="";
            quote.forEach((text:mydata)=>{
                const p=document.createElement('p');
                p.textContent=`${text.quote} - ${text.author}`;
                container.appendChild(p);
            }
            )
        }

    }
}
display();