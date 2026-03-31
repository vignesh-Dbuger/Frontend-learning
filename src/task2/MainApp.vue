<template>

    <form-component 
        :name="true"
        :age="true"
        :address="true"
        :phno="true"
        :range=20
        @error="ErrorMessage"
  />
  
 <p class="error">{{ err }}</p>  
   
</template>

<script setup lang="ts">
   
   import FormComponent from './FormComponent.vue';

   import {ref} from 'vue';

   const err=ref<string>('')



    const ErrorMessage = (errorMsg:string) =>{
        err.value = errorMsg;
    }

    


</script>

<style>
.error{
    color: red;
}
</style>