<template>
    <div class="notes">
        <div class="note" 
            :class="{full: !grid, green: note.selected =='low', yellow: note.selected =='middle', red: note.selected =='high'}" 
            v-for="(note, index) in notes" :key="index">
            <div class="note-desc">
                <div v-if="note.selected" class="note-label">
                    {{note.selected}}
                </div>
                <p class="note-close" @click="removeNote">x</p>
            </div>
            <div class="note-header" :class="{full: !grid}">
                <p>{{note.title}}</p>
            </div>
            <div class="note-body">
                <p>{{note.desc}}</p>
                <span>{{note.date}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       props: {
        notes: {
            type: Array,
            required: true
        },
        grid: {
            type: Boolean,
            required: true
        }
       },
       methods: {
            removeNote(index) {
                this.$emit('remove', index)
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
    .yellow {
        background-color: rgb(245, 245, 105);
    }
    .green {
        background-color: rgb(97, 221, 97);
    }
    .red {
        background-color: rgb(204, 67, 67);
    }
</style>