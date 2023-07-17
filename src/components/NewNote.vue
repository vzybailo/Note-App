<template>
    <div class="new__note">
        <form @submit.prevent="addNote">
            <div class="new__note-header">
                <div class="new__note-title">
                    <label for="title">
                        Title
                        <input id="title" v-model="note.title" type="text">
                    </label>
                </div>
            </div>
            <div class="new__note-text">
                    <label for="desc">
                        Description
                        <textarea v-model="note.desc"></textarea>
                    </label>
            </div>
             <div class="new__note-priority">
                    Priority
                    <select v-model="note.selected">
                        <option disabled value="" >Select </option>
                        <option
                            v-for='(priority, index) in note.priorities'
                            :key="index">
                        {{ priority.name }}
                        </option>
                    </select>
            </div>
            <button class="btn bntPrimary">New note</button>
        </form>
    </div>
</template>

<script>

    export default {
        props: {
            note: {
                type: Object,
                required: true
            }
        },
        methods: {
            addNote() {
                this.$emit('addNote', this.note, this.selected)
            }
        }
    }
</script>

<style lang="scss">
    .new__note {
        text-align: center;

         select {
            border-radius: 20px;
            padding: 16px;
            margin-bottom: 30px;
        }
    }
    .new__note-text {
        margin-bottom: 30px;
    }
    .new__note-priority {
        font-size: 16px;
    }
</style>