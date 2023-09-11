<template>
    <div class="notes">
        <div class="card has-background-success-dark p-4 mb-5">
            <div class="field">
                <div class="control">
                    <textarea class="textarea" placeholder="Add new note"></textarea>
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button class="button is-link has-background-success">Add New Note</button>
                </div>
            </div>
        </div>
        <div class="card mb-4" v-for="item in 3">
            <div class="card-content">
                <div class="content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa aut odit aliquid vero, mollitia
                    explicabo, ratione voluptas rem porro distinctio vel veniam blanditiis esse aperiam doloribus possimus
                    voluptatum. Laborum, aut.
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>
        </div>
    </div>
</template>