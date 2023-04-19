import { ref, isRef, unref, watchEffect } from 'vue'

export default function useValidator(value, validateFunc) {
    const isValid = ref(false)
    
    if (isRef(value)) {
        watchEffect(() => {
            isValid.value = validateFunc(unref(value))
        })
    } else {
        isValid.value = validateFunc(value)
    }
    
    return isValid
}