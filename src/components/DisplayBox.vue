<template>
   
   <div v-if="isVisible">
     <h2>{{message}}</h2>
   </div>

</template>

<script setup>

import {defineProps} from 'vue';
   
   defineProps({
    isVisible:Boolean,
    message:String
   })
   
</script>