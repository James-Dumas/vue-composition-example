<template>
    <div class="panel">
        <h2>Left Panel</h2>
        <div class="panel-body">
            <div>
                <p>Input text here:</p>
                <input v-model="inputText" @input="validateInput()">
            </div>
            <h3>Your input: {{ inputText }}</h3>
            <h3>Valid: {{ isValid }}</h3>
            <p v-if="errorMessage != null">Error: {{ errorMessage }}</p>
            <p v-else>Input OK!</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LeftPanel',
    data: () => ({
        inputText: '',
        isValid: false,
        errorMessage: null,
    }),
    methods: {
        validateInput() {
            if (this.inputText.length == 0) {
                this.isValid = false
                this.errorMessage = 'Input is required'
            } else if (this.inputText.length < 8) {
                this.isValid = false
                this.errorMessage = 'Input is too short'
            } else if (this.inputText.length > 20) {
                this.isValid = false
                this.errorMessage = 'Input is too long'
            } else {
                this.isValid = true
                this.errorMessage = null
            }
        },
    },
    mounted() {
        this.validateInput()
    },
}
</script>