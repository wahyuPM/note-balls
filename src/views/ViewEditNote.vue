<template>
    <div class="edit-note">
        <AddEditNote ref="addEditNoteRef" v-model="noteContent" bgColor="link" placeholder="Edit note" label="Edit Note">
            <template #buttons>
                <router-link to='/' class="button is-link is-light">Cancel</router-link>
                <button @click="hangleSaveCliked" class="button is-link has-background-link ml-2"
                    :disabled="!noteContent">Save
                    Note</button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { useStoreNotes } from '../stores/storeNotes';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';

const route = useRoute()
const router = useRouter()

const noteContent = ref('')

const storeNotes = useStoreNotes()

noteContent.value = storeNotes.getNoteContent(route.params.id)

const hangleSaveCliked = () => {
    storeNotes.updateNote(route.params.id, noteContent.value)
    router.push('/')
}
</script>