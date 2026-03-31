import { defineStore } from 'pinia'

import {ref} from 'vue'

export interface UserData{
    name:string;
    age:number | null;
    address:string;
    phNo:number | null;
}

export const useStore=defineStore('userstore',()=>{

    const userList=ref<UserData[]>([])

       

    const addUser=(user:UserData)=>{

      const userExist = userList.value.find(
            (u) => u.name.toLowerCase() === user.name.toLowerCase()
        )

        if(userExist){
            alert("user already exist");
            return 0;
        }
       else{
        userList.value.push({...user})
        alert("data add sucessfully");
        return 1;
        
       }
    }

    console.log(userList);
    

    return { userList,addUser}
})