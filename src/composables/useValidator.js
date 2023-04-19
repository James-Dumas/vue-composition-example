import { ref, isRef, unref, watchEffect } from 'vue'

export default function useValidator(value) {
    const isValid = ref(false)
    const errorMessage = ref(null)

    function validate(value) {
        if (value.length == 0) {
            isValid.value = false
            errorMessage.value = 'Input is required'
        } else if (value.length < 8) {
            isValid.value = false
            errorMessage.value = 'Input is too short'
        } else if (value.length > 20) {
            isValid.value = false
            errorMessage.value = 'Input is too long'
        } else {
            isValid.value = true
            errorMessage.value = null
        }
    }
    
    if (isRef(value)) {
        watchEffect(() => {
            validate(unref(value))
        })
    } else {
        validate(value)
    }
    
    return isValid
}