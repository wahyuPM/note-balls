import { defineStore, acceptHMRUpdate } from 'pinia'
import { collection, onSnapshot, doc, deleteDoc, updateDoc, query, orderBy, addDoc } from "firebase/firestore";
import { db } from '@/js/firebase'
import { useStoreAuth } from './storeAuth';

let notesCollectionRef
let notesCollectionQuery

let getNoteSnapshot = null

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [],
            notesLoaded: false
        }
    },
    actions: {
        init() {
            const storeAuth = useStoreAuth()
            notesCollectionRef = collection(db, "users", storeAuth.user.id, 'notes')

            notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));
            this.getNotes()
        },
        async getNotes() {
            this.notesLoaded = false

            if (getNoteSnapshot) getNoteSnapshot() // unsubsbribe from any active listener

            getNoteSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {
                let notes = [];
                querySnapshot.forEach((doc) => {
                    let note = {
                        id: doc.id,
                        content: doc.data().content,
                        date: doc.data().date
                    }

                    notes.push(note)
                });
                this.notes = notes
                this.notesLoaded = true
            }, error => {
                console.log(error.message);
            });
        },
        clearNotes() {
            this.notes = []
        },
        async addNote(newNoteContent) {
            let currentDate = new Date().getTime(),
                date = currentDate.toString()

            await addDoc(notesCollectionRef, {
                content: newNoteContent,
                date
            });

        },
        async deleteNote(idToDelete) {
            await deleteDoc(doc(notesCollectionRef, idToDelete));
        },
        async updateNote(id, content) {
            await updateDoc(doc(notesCollectionRef, id), {
                content: content
            });
        }
    },
    getters: {
        getNoteContent: (state) => {
            return (id) => {
                return state.notes.filter(note => {
                    return note.id === id
                })[0].content
            }
        },
        totalNotesCount: (state) => {
            return state.notes.length
        },
        totalCharacterCount: (state) => {
            let count = 0
            state.notes.forEach(note => {
                count += note.content.length
            })

            return count
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot))
}