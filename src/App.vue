<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
           <h2 class="title">{{ this.titleApp }}</h2>
          <!-- error message -->
          <message
            v-if="this.message"
            :message="this.message"/>
          <!-- new note -->
          <newnote
            :note="this.note"
            @addNote="addNote"
          />
          <div class="note-header" style="margin: 26px">
            <!-- title -->
            <h1>{{this.title}}</h1>
            <!-- search -->
            <search
              :value="this.search"
              placeholder="Find your note"
              @search="this.search = $event"
            />
            <!-- icons controls -->
            <div class="icons">
              <svg :class="{active: this.setGrid()}" @click="grid=true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class="{active: !grid}" @click="grid=false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
          </div>
          <!-- note list -->
          <notes
            :notes="notesFilter"
            @remove="removeNote"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import message from '@/components/Message.vue'
import newnote from '@/components/NewNote.vue'
import notes from '@/components/Notes.vue'
import search from '@/components/Search.vue'

import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    message, newnote, notes, search
  },
  data () {
    return {
      //grid: true,
    }
  },
  computed: {
    ...mapState([
      'title',
      'titleApp',
      'search',
      'message',
      'note',
      'notes',
      'grid'
    ]),
    notesFilter() {
      let array = this.notes,
          search = this.search

        if (!search) return array
        search = search.trim().toLowerCase()
        // Filter
        array = array.filter(function (item){
          if (item.title.toLowerCase().indexOf(search) !== -1) {
            return item
          }
        })
        // eror
        return array
    },
  },
  methods: {
    ...mapMutations([
      'setMes',
      'setPriorMes',
      'setClearMes',
      'setGrid'
    ]),
      addNote () {
        console.log(this.grid)
          let {title, desc, selected, editable} = this.note
          if (this.note.title == '') {
              this.setMes()
              return false
          } else if (this.note.selected == '') {
              this.setPriorMes()
              return false
          }

          this.notes.push({
              title,
              desc,
              date: new Date(Date.now()).toLocaleString(),
              selected,
              editable
          })

          this.note.title = ''
          this.note.desc = ''
          this.note.selected = 'low'
          this.setClearMes()
      },
      removeNote(index) {
          this.notes.splice(index, 1)
      },

  }
}
</script>

<style>
        h2.title {
            font-size: 30px;
            color: darkblue;
            margin-bottom: 25px;
            text-align: center;
        }
</style>