//@ts-ignore
import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm";

interface Item {
    id:number
    title: string;
    
}
async function getdata() :Promise<void> {
    try{
         const {data}=await axios.get<Item[]>("https://jsonplaceholder.typicode.com/posts");
     const arr:string[] =data.filter((item:Item)=>{
       if( item.id === 2)
        console.log(item.title)
     return item.id === 2;
     });
    }
    catch(error){
        console.log("error",error);
        
    }
  
}
getdata();