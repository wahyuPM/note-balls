import { defineStore, acceptHMRUpdate } from 'pinia'
import { auth } from '@/js/firebase'

export const useStoreAuth = defineStore('storeAuth', {
    state: () => {
        return {

        }
    },
    actions: {

    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStoreAuth, import.meta.hot))
}