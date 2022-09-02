<template>
    <div class="new__note">
        <div class="new__note-header">
            <div class="new__note-title">
                <label for="title"> 
                <input placeholder="Write the title of the note" id="title" v-model="note.title" type="text">
            </label>
            </div>
             <div class="new__note-priority">
                <label for=""> Priority
                    <select v-model="note.selected">
                        <option disabled value="" >Select priority</option>
                        <option 
                            v-for='(priority, index) in priorities' 
                            :key="index">
                        {{ priority.name }}
                        </option>
                    </select>
                </label>     
            </div>
        </div>
       <div class="new__note-text">
            <label for="desc"> 
                <textarea placeholder="Write a description" v-model="note.desc"></textarea>
            </label>
       </div>  
        <button class="btn bntPrimary" @click="addNote">New note</button>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                priorities: [
                    {name: 'low'},
                    {name: 'middle'},
                    {name: 'high'}
                ]
            }
        },
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
            width: 50%;
        }
        .new__note-header {
            display: flex;
            justify-content: space-between;
        }
        .new__note-title, .new__note-priority {
            width: 50%;
        }
    }
</style>