interface safety{
   id:number;
   title:string;
   body:string;
   userid:number;
}
//@ts-ignore
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm';

const url='https://jsonplaceholder.typicode.com/posts';
async function getdata(){
    try{
        const { data }=await axios.get<safety[]>(url);
       data.map(()=>{
        console.log();
        
       })
       
    }
    catch(error:any){
        if(error.response) console.log("server error",error.response.status);
        else
        console.log("error",error.message);
    }
}
getdata();