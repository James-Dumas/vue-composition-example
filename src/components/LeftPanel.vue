<script setup>
import { toRef } from 'vue'
import { useInputStore } from '@/stores/input'
import { useValidator } from '@/composables/validator'
import CustomInput from '@/components/CustomInput.vue'

const inputStore = useInputStore()

const { isValid, errorMessage } = useValidator(toRef(inputStore, 'inputText'))
</script>

<template>
    <div class="panel">
        <h1>Left Panel</h1>
        <div class="panel-body">
            <CustomInput v-model="inputStore.inputText" label="Input text here:" />
            <p>Your input: {{ inputStore.inputText }}</p>
            <p>Valid: {{ isValid }}</p>
            <p v-if="errorMessage != null">Error: {{ errorMessage }}</p>
            <p v-else>Input OK!</p>
        </div>
    </div>
</template>