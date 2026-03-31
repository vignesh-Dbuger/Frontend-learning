<template>
    <label>
        <input type="number"   v-model="numberValue">
        {{ NumberError }}
    </label>
      <label>
        <input type="text" placeholder="enter name"  v-model="userValue">
        {{ TextError }}
    </label>
</template>
<script setup>


import{ref,defineProps,watch} from 'vue'

const props=defineProps({
    NumberLimit:Number, 
    SpecfiWord:String 
})

const numberValue=ref(0)

const NumberError=ref('')

const TextError=ref('')

watch(numberValue,(newval)=>{
    if(newval>props.NumberLimit) {
        NumberError.value="number limit 20";
    }
})

const userValue=ref('')

watch(userValue,(newval)=>{
 
    const wordArray=newval.split(" ");

    if( newval.length>8 || wordArray.includes(props.SpecfiWord)){
        userValue.value=newval.substring(0,8)
        TextError.value="range limit 8 Hello invalid"
    }
    
})

</script>