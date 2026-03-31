<template>
    {{ text }}
<div>
    <h1>Login form</h1>
    
    <label>UserName</label>
    <input type="text" placeholder="Enter Name" v-model="form.name">

    <label>password</label>
    <input type="Number" placeholder="Enter number password" v-model="form.password">

    <label for="role">Role</label>

    <select v-model="form.role">
        <option value="">Select Role</option>
        <option >Admin</option>
        <option >User</option>
    </select>

    <label>
    <input type="checkbox"  v-model="form.active">Active
    </label>

    <br>

    <button @click="saveData">save</button>

</div>
<AppPopup
  :showpopup="ispopup"
  @close="ispopup=false"
>
<p> form has been saved</p>
</AppPopup>
</template>
<script setup>
import { ref, watch ,defineEmits} from 'vue';

import AppPopup from './AppPopup.vue';


const form=ref({ name:"",
    password:null,
    role:"",
    active:false})


let text;

const emit=defineEmits(['submit','callback'])

const ispopup=ref(false)

function saveData(){
    
    ispopup.value=true;

    emit('submit',{...form.value})
}


watch(form,(newval)=>{
    emit('callback',newval.password)
     text=newval.name;
},{deep:true})
</script>