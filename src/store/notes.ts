import { makeAutoObservable } from "mobx"
import { toJS } from "mobx"
import { ICategory, INote } from "../modules/notes/components/models"


class NoteStore {
  constructor() {
    makeAutoObservable(this)
  }
  notesArray: ICategory[] = JSON.parse(localStorage.getItem('notes') || '[]')

  addNoteCategory(note: ICategory) {

    this.notesArray = [...this.notesArray, note]
    localStorage.setItem("notes", JSON.stringify(this.notesArray))
    //  this.notesArray.push(note)
  }

  addNote(newNote: INote){
    this.notesArray.map((e)=> e.categoryUrl === newNote.parent ? e.notes.push(newNote) : false)
    localStorage.setItem("notes", JSON.stringify(this.notesArray))
    }
}

const notesStore = new NoteStore()
export { notesStore }