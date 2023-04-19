<script setup>
import { ref } from 'vue'

const inputText = ref('')

</script>

<template>
    <div class="panel">
        <h1>Right Panel</h1>
        <div class="panel-body">
            <p>This is a different component.</p>
            <p>Your input: {{ inputText }}</p>
        </div>
    </div>
</template>