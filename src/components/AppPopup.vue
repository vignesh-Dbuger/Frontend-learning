<template>
    
  <Teleport to="body">
       <div v-if="showpopup" class="overley">

        <div class="modal">

            <h4>Form submitted!</h4>
            <slot>

            </slot>
            <button @click="emit('close')">close</button>
        </div>

       </div>
  </Teleport>

</template>

<script setup>

import {defineProps,defineEmits} from 'vue'

defineProps({
    showpopup:Boolean
})

const emit=defineEmits(['close'])

</script>

<style>
.overley{
    display: flex;
    background-color: aliceblue;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;

}

</style>