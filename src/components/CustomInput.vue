<script setup>
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    }
})

const inputText = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})
</script>

<template>
    <div>
        <p>{{ props.label }}</p>
        <input v-model="inputText">
    </div>
</template>