<script setup>
import { useInputStore } from '@/stores/input'

const inputStore = useInputStore()
</script>

<template>
    <div class="panel">
        <h1>Right Panel</h1>
        <div class="panel-body">
            <p>This is a different component.</p>
            <p>Your input: {{ inputStore.inputText }}</p>
        </div>
    </div>
</template>