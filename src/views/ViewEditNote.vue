<template>
    <div class="edit-note">
        <AddEditNote ref="addEditNoteRef" v-model="noteContent" bgColor="link" placeholder="Edit note" label="Edit Note">
            <template #buttons>
                <router-link to='/' class="button is-link is-light">Cancel</router-link>
                <button class="button is-link has-background-link" :disabled="!noteContent">Save
                    Note</button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { useStoreNotes } from '../stores/storeNotes';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute()

const noteContent = ref('')

const storeNotes = useStoreNotes()

noteContent.value = storeNotes.getNoteContent(route.params.id)
</script>