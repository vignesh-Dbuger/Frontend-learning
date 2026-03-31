<template>
    <div class="form-container">

        <div v-if="name">

            <label>Name</label>
           <input type="text" placeholder="enter name" v-model="formData.name" @blur="onBlur('name')"/>
          <span v-if="errors.name" class="error">{{errors.name }}</span>

        </div>

         <div v-if="age">

            <label>Age</label>
           <input type="number" placeholder="enter Age" v-model="formData.age" @blur="onBlur('age')">
            <span v-if="errors.age" class="error">{{ errors.age}}</span>
        </div>


         <div v-if="address">

            <label>Address</label>
           <textarea  placeholder="enter Address" v-model="formData.address" @blur="onBlur('address')"></textarea>
            <span v-if="errors.address" class="error">{{ errors.address }}</span> 
           
        </div>

         <div v-if="phno">

            <label>PhNo</label>
           <input type="number" placeholder="enter phno" v-model="formData.phNo" @blur="onBlur('phNo')"><br>
            <span v-if="errors.phNo" class="error">{{ errors.phNo}}</span> 
          
        </div>

        <button @click="saveData"  :disabled="!isFormValid">save</button>


         <div v-for="(value,i) in store.userList" :key="i">

            <p>{{ value.name }}</p>
            <p>{{ value.age }}</p>
            <p>{{ value.address }}</p>
            <p>{{ value.phNo }}</p>

         </div>
    </div>
</template>

<script setup lang="ts">
    
    import { computed, reactive,  ref,  watch } from 'vue'

    import { UserData, useStore } from '../userStore'

    const store = useStore();

const props = defineProps({
  name:{
   type:Boolean,
   required:true
  },
  age:Boolean,
  address:Boolean,
  phno:Boolean,
  range:{
   type:Number,
   default:50
  }
})

const emit=defineEmits<{
   error:[msg:string]
   send:[]
}>()

 const formData=reactive<UserData>({
        name: '',
        age:null,
        address:'',
        phNo:null
    })

const toched=reactive<Record<string,boolean>>({})

 function onBlur(field:string):void{

    toched[field]=true

}

const nameReached=ref<boolean>(false)

const phNoLimit=ref<boolean>(false)

const addressLimit=ref<boolean>(false)


const errors=computed<Record<string,string>>(()=>{

   const result:Record<string,string>={}

    const alphabet=/^[A-Za-z]*$/

      if(!formData.name){

         result.name= toched.name ? 'name is required' :''
      } 
     else if(!alphabet.test(formData.name)) {
      result.name='Only letter allowed';
     } 

     else if(nameReached.value) {

        result.name= 'name limit reached';

     }
     else{
      result.name=''
     }

     //age

     if(!formData.age) result.age= toched.age ? 'age is required' : ''

     else if(! (formData.age>=18 && formData.age<=50)) {

        result.age= 'age limit 18 to 50';

     }
     else{
      result.age=''
     }

     //address 

     if(!formData.address) result.address= toched.address ? 'address is required' : ''

     else if(addressLimit.value) {
       
        result.address="address limit 150 reached"
     }
     else{
      result.address=''
     }

     //phno

      if(!formData.phNo) result.phNo= toched.phNo ? 'Phone number is required' : ''

    else if(phNoLimit.value) {
      result.phNo="max 10 letter"
    }
    else{
      result.phNo=''
    }


     return result;
})









const isFormValid =computed<boolean>(()=>{
   
   const nameOk=  props.name && !errors.value.name && !!formData.name

   const ageOk=  props.age && !errors.value.age && !!formData.age
   
   const addressOk=  props.address && !errors.value.address && !!formData.address

   return Boolean(nameOk && ageOk && addressOk);
})



function saveData() {

  if(!isFormValid.value) {
   emit('error','fill reqired filled')
   return
  }

  store.addUser(formData)
  alert("data store sucessfully")
}



watch(()=>formData.name,(newName)=>{

   const limit=props.range;
  
   if(newName &&  newName.length>limit){

       nameReached.value=true;

       formData.name=newName.substring(0,limit);
  }
  else{
    if(newName.length<limit)
        nameReached.value=false;
  }
  
})

watch(()=>formData.phNo,(newph)=>{

   const limit=props.range ?? 10;

    if(newph && newph.toString().length >10){
         phNoLimit.value=true;
       formData.phNo = Number(newph.toString().substring(0, limit));
    }
    else if (newph && newph.toString().length <10){
        phNoLimit.value=true;
    }
   else{
      if (newph && newph.toString().length == 10)  phNoLimit.value=false;

   }
})

   watch(()=>formData.address,(newadd)=>{

   const limit=props.range ?? 150;

     if (newadd && newadd.length>limit ) {
       
       addressLimit.value=true
       formData.address = newadd.substring(0, limit);
      
    }
    else{
      if(newadd.length<limit)
         addressLimit.value=false
    }


    
    
   })

</script>

<style >
 
 .form-container{
    display: flex;
    flex-direction: column;
    width: 200px;
    gap: 10px;
    
 }
 .error{
   color: red;
 }


</style>