<template>
    <div class="notes">
        <AddEditNote ref="addEditNoteRef" v-model="newNote" placeholder="Add new note">
            <template #buttons>
                <button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">Add New
                    Note</button>
            </template>
        </AddEditNote>
        <progress v-if="!storeNotes.notesLoaded" class="progress is-large is-success" max="100"></progress>
        <template v-else>
            <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
            <div v-if="!storeNotes.notes.length" class="is-size-4 has-text-centered has-text-grey is-family-monospace py-6">
                No notes here yet...</div>
        </template>
    </div>
</template>

<script setup>
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue';

import { useStoreNotes } from '@/stores/storeNotes.js'
import { useWatchCharacter } from '@/use/useWatchCharacter.js'

import { ref, onMounted } from 'vue';



const storeNotes = useStoreNotes()

const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = ''
    addEditNoteRef.value.focusTextarea() // call function from child component
}

useWatchCharacter(newNote)

onMounted(() => {
    storeNotes.getNotes()
})


</script>