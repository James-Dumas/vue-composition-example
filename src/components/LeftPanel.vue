<script setup>
import { ref } from 'vue'
import { useValidator } from '@/composables/validator'
import CustomInput from '@/components/CustomInput.vue'

const inputText = ref('')

const { isValid, errorMessage } = useValidator(inputText)
</script>

<template>
    <div class="panel">
        <h1>Left Panel</h1>
        <div class="panel-body">
            <CustomInput v-model="inputText" label="Input text here:" />
            <p>Your input: {{ inputText }}</p>
            <p>Valid: {{ isValid }}</p>
            <p v-if="errorMessage != null">Error: {{ errorMessage }}</p>
            <p v-else>Input OK!</p>
        </div>
    </div>
</template>