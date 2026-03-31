let db:IDBDatabase;
const request=indexedDB.open("myfirstDB",1);
request.onupgradeneeded=function (event:Event){
    const target=event.target as IDBOpenDBRequest;
    db=target.result;
    db.createObjectStore("user",{
        keyPath:"id",
        autoIncrement:true
    });
    console.log("object created");
    
};
request.onsuccess=function(event:Event){
    const target=event.target as IDBOpenDBRequest;
    db =target.result;
    console.log("database open");
    
};
request.onerror=function(){
    console.log("error open");
}
const addbtn=document.querySelector<HTMLButtonElement>(".adduser") || null;
const getbtn=document.querySelector<HTMLButtonElement>(".getuser") || null;
addbtn?.addEventListener("click",()=>
{
    const transe=db.transaction("user","readwrite");
    const store=transe.objectStore("user");
    const user1={
        name:"vignesh",
        age:23
    };
    const request =store.add(user1);
    request.onsuccess=function(){
        console.log("user add");
        
    };
    request.onerror=function (){
        console.log("error add");
    };
});
getbtn?.addEventListener("click",()=>{
    const transe=db.transaction("user","readonly");
    const store=transe.objectStore("user");
    const request=store.getAll();
    request.onsuccess=function (){
        console.log("all user",request.result);  
    }
});
const removebtn=document.querySelector<HTMLButtonElement>(".deleteuser") || null;
removebtn?.addEventListener("click",()=>{
    const transe=db.transaction("user","readwrite");
    const store=transe.objectStore("user");
    const request= store.delete(1);
    request.onsuccess=function (){
        console.log("deleted");
    }
});