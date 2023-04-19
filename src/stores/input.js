import { defineStore } from 'pinia'

export const useInputStore = defineStore('input', {
    state: () => ({
        inputText: ''
    })
})