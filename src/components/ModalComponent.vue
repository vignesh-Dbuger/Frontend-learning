<template>
    <div v-if="props.show" class="modal">

        <div class="model-content">

            <h3>Update Data</h3>

            <p>Name:{{ data.name }}</p>
            <p>password:{{ data.password }}</p>
            <p>Role:{{ data.role }}</p>

            <p v-if="props.data.active">Active User</p>
            <p v-else>Inactive User</p>

            <button @click="closebutton">Close</button>

        </div>

    </div>
</template>
<script setup>

import {defineProps,defineEmits} from 'vue'

const props=defineProps({
    show:Boolean,
    data:Object
})

const emit=defineEmits(['close'])

function closebutton(){
    emit('close',"button closed")
}

</script>