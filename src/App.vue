<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
           <h2>{{ titleApp }}</h2>
          <!-- error message -->
          <message v-if="message" :message="message"/>
          <priority v-if="priority" :priority="priority"/>
          <!-- new note -->
          <newnote
            :note="note"
            @addNote="addNote"
          />
          <div class="note-header" style="margin: 26px">
            <!-- title -->
            <h1>{{title}}</h1>
            <!-- search -->
            <search
              :value="search"
              placeholder="Find your note"
              @search="search = $event"
            />
            <!-- icons controls -->
            <div class="icons">
              <svg :class="{active: grid}" @click="grid=true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class="{active: !grid}" @click="grid=false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
          </div>       
          <!-- note list -->
          <notes
            :notes="notesFilter"
            :grid="grid"
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
import priority from '@/components/Priority.vue'

export default {
  components: {
    message, newnote, notes, search, priority
  },
  data () {
    return {
      title: 'Notes list',
      titleApp: 'Notes App',
      search: '',
      message: null,
      priority: null,
      selectedPriority: '',
      grid: true,
      note: {
          title: '',
          desc: '',
          selected: ''
      },
      notes: [
      {
          title: 'First note',
          desc: 'description for first note',
          date: new Date(Date.now()).toLocaleString(),
      },
      {
          title: 'Second note',
          desc: 'description for second note',
          date: new Date(Date.now()).toLocaleString(),
      },
      {
          title: 'Third note',
          desc: 'description for third note',
          date: new Date(Date.now()).toLocaleString(),
      }
      ]
    }
  },
  computed: {
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
    }
  },
  methods: {
      addNote(){
          let {title, desc, selected} = this.note
          
          if (this.note.title == '') {
              this.message = 'Title can`t be blank!'
              return false
          }

          if(this.note.selected == '') {
            this.priority = 'Priority can`t be blank'
            return false
          }

          this.notes.push({
              title,
              desc,
              date: new Date(Date.now()).toLocaleString(),
              selected
          })

          this.note.title = ''
          this.note.desc = ''
          this.note.selected = 'Low'
          this.message = null
          this.priority = null
      },
      removeNote(index) {
        this.notes.splice(index, 1)
      }
  }
}
</script>

<style>
        h2 {
            font-size: 45px;
            color: darkblue;
            margin-bottom: 25px;
            text-align: center;
        }
</style>
