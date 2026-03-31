<template>
 
 <FormComponent
 :NumberLimit="RangeNumber"
 :SpecfiWord="word"
 />

</template>
<script setup>
import FormComponent from './FormComponent.vue';



const RangeNumber=20;
 const word="hello"

</script>