import { watch } from "vue"

export function useWatchCharacter(valueToWatch, maxChars = 100) {
    watch(valueToWatch, (newValue) => {
        if (newValue.length == maxChars) {
            alert(`Only ${maxChars} character allowed`)
        }
    })
}