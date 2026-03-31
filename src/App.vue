<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<template>
  <div class="form-container">
    <label>{{ label }}</label>
    <input 
      :type="type" 
      :placeholder="placeholder" 
      :value="modelValue"
      @input="onInput"
    />
    <span v-if="localError" class="errorMsg">{{ localError }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  label: String,
  type: String,
  value: String,       // 'name', 'age', 'address', or 'phNo'
  modelValue: [String, Number],
  limit: Number,
  placeholder: String
});

const emit = defineEmits(['update:modelValue', 'updateModel']);
const localError = ref('');

// 1. Update parent value on typing
const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

// 2. Watch the modelValue for validation
watch(() => props.modelValue, (newValue) => {
  let error = '';
  const valString = String(newValue || '');

  // Validation Logic based on the 'value' prop
  if (props.value === 'name') {
    const alphabet = /^[A-Za-z\s]*$/;
    if (!alphabet.test(valString)) {
      error = "Alphabets only allowed";
    }
  }

  if (props.value === 'age' && Number(newValue) <= 0 && newValue !== null) {
    error = "Enter valid age";
  }

  // Length Limit Logic
  if (props.limit && valString.length > props.limit) {
    error = `Limit reached (${props.limit} chars)`;
    // Automatically trim the value if it exceeds limit
    emit('update:modelValue', valString.substring(0, props.limit));
  }

  // Sync error state
  localError.value = error;
  emit('updateModel', error); // Sends error up to parent
}, { immediate: true }); // immediate: true checks validation on load
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 250px;
}
.errorMsg {
  color: red;
  font-size: 0.75rem;
  margin-top: 4px;
}
</style>
