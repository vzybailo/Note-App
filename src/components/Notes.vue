<template>
    <div class="notes">
        <div class="note"
            :class="[`${note.selected}`,
            {'full': !grid}]"
            v-for="(note, index) in notes" :key="index"
            >
            <div class="note-desc">
                <div v-if="note.selected" class="note-label">
                    {{note.selected}}
                </div>
                <p class="note-close" @click="removeNote">x</p>
            </div>
            <div class="note-header" :class="{full: !grid}">
                <p
                    v-if="!note.editable"
                    @click="editTitle(note, index)">
                    {{note.title}}
                    <span class="icon-edit">✎</span>
                </p>
                <input
                    class="note-title-edit"
                    v-else
                    v-model="note.title"
                    v-on:keyup.enter="saveTitle(index)"
                    v-on:keyup.esc="cancelSave(note, index)"
                    type="text">
            </div>
            <div class="note-body">
                <p>{{note.desc}}</p>
                <span>{{note.date}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        props: {
            grid: {
                type: Boolean
            }
        },
        data() {
            return {
                chachedTitle: '',
                message: null
            }
        },
        computed: {
            ...mapState([
                'note',
                'notes'
            ]),
            noteSelect (note) {
                this.note.selected
            }
        },
        methods: {
            removeNote(index) {
                this.$emit('remove', index)
            },
            editTitle(note, index) {
                this.cachedTitle = note.title
                this.notes[index].editable = true
            },
            saveTitle(index) {
                this.notes[index].editable = false
            },
            cancelSave(note, index) {
                note.title = this.cachedTitle
                this.notes[index].editable = false
            }
        }
    }
</script>

<style lang="scss">
    .notes {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        padding: 40px 0;
    }

    .note {
        width: 49%;
        padding: 18px 20px;
        margin-bottom: 20px;
        background: #fff;
        transition: 0.25s;
        &.full {
            width: 100%;
        }
    }
    .note:hover {
        box-shadow: 0 30px 30px rgba(0,0,0,0.04);
        transform: translate(0, -6px);
    }
    .full {
        width: 100%;
        text-align: center;
    }
    .note-desc {
        display: flex;
        justify-content: space-between;
        position: relative;
    }
     .note-label {
        margin-bottom: 5px;
        background-color: #fff;
        text-transform: uppercase;
        color: #999;
        width: 15%;
        text-align: center;
        padding: 5px;
        font-size: 12px;
    }
    .note-close {
        cursor: pointer;
        position: absolute;
        right: 0;
    }
    .note-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h1 {
            font-size: 32px;
        }
        p {
            color: #402caf;
            font-size: 22px;
            display: flex;

            .icon-edit {
                display: none;
                margin-left: 5px;
                font-size: 15px;
            }
        }
        svg {
            color: #999;
            margin-right: 12px;
            cursor: pointer;
            &.active {
                color: #402caf;
            }
            &:last-child {
                margin-right: 0;
            }
        }

        p:hover .icon-edit {
            display: block;
        }
    }
    .note-body {
        p {
            margin: 20px 0;
        }
        span {
            font-size: 14px;
            color: #999;
        }
    }
    .middle {
        background-color: rgb(245, 245, 105);
    }
    .low {
        background-color: rgb(97, 221, 97);
    }
    .high {
        background-color: rgb(204, 67, 67);
    }
    input.note-title-edit {
        border-radius: 0;
        padding: 5px 16px 5px 3px;
        font-size: 22px;
        width: 80%;
        margin-bottom: 0;
        color: #402caf;
    }
</style>