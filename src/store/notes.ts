import { makeAutoObservable } from "mobx"
import { toJS } from "mobx"
import { ICategory } from "../modules/notes/components/models"





class NoteStore {
    constructor() {
        makeAutoObservable(this)
    }
   

    notesArray: ICategory[] = [
        {
            icon: 3,
            categoryUrl: 'game',
            name: 'Game',
            color:  '#80A3FF',
        },
        {
            icon: 6,
            categoryUrl: 'my child',
            name: 'My child',
            color: '#FDBE7E',
        },
        {
            icon: 2,
            categoryUrl: 'work',
            name: 'Work',
            color:  '#F9A090',
        },
        {
            icon: 1,
            categoryUrl: 'food',
            name: 'Food',
            color: '#6DD28C',
        },
    ]

    addNote(note: ICategory) {
     
      this.notesArray =[...this.notesArray, note]
      
      //  this.notesArray.push(note)
    }
}

const notesStore = new NoteStore()
export { notesStore }