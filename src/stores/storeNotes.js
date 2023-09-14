import { defineStore, acceptHMRUpdate } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [
                {
                    id: 'id1',
                    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa aut odit aliquid vero, mollitia explicabo, ratione voluptas rem porro distinctio vel veniam blanditiis esse aperiam doloribus possimus voluptatum.Laborum, aut.'
                },
                {
                    id: 'id2',
                    content: 'This is shorter note! woo!'
                }
            ]
        }
    },
    actions: {
        addNote(newNoteContent) {
            let currentDate = new Date().getTime(),
                id = currentDate.toString()

            let note = {
                id,
                content: newNoteContent
            }

            this.notes.unshift(note)
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot))
}