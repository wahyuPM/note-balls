<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="has-text-right has-text-grey-light mt-2">
                    <small>{{ characterLength }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <router-link :to="`/editNote/${note.id}`" class="card-footer-item">Edit</router-link>
            <a @click.prevent="modals.deleteNote = true" href="#" class="card-footer-item">Delete</a>
        </footer>
        <ModalDeleteNote v-if="modals.deleteNote" v-model="modals.deleteNote" />
    </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import ModalDeleteNote from './ModalDeleteNote.vue';
import { useStoreNotes } from '@/stores/storeNotes.js';

const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})

const storeNotes = useStoreNotes()

const characterLength = computed(() => {
    let length = props.note.content.length
    let description = length > 1 ? 'characters' : 'character'
    return `${length} ${description}`
})

const modals = reactive({
    deleteNote: false
})
</script>