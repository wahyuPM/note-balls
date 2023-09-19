<template>
    <div class="notes">
        <AddEditNote ref="addEditNoteRef" v-model="newNote" placeholder="Add new note">
            <template #buttons>
                <button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">Add New
                    Note</button>
            </template>
        </AddEditNote>
        <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
    </div>
</template>

<script setup>
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue';

import { useStoreNotes } from '@/stores/storeNotes.js'

import { ref } from 'vue';

const storeNotes = useStoreNotes()

const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = ''
    addEditNoteRef.value.focusTextarea() // call function from child component
}

</script>