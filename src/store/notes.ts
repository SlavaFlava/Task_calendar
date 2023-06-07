import { makeAutoObservable } from "mobx"
import { toJS } from "mobx"
import { ICategory } from "../modules/notes/components/models"





class NoteStore {
    constructor() {
        makeAutoObservable(this) 
    }

    notesArray: ICategory[] = [
        {
            icon:3,
            categoryUrl:'game',
            name: 'Game',
            color: 0,
        },
        {
            icon:6,
            categoryUrl:'my child',
            name: 'My child',
            color: 1,
        },
        {
            icon:2,
            categoryUrl:'work',
            name: 'Work',
            color: 3,
        },
        {
            icon:1,
            categoryUrl:'food',      
            name: 'Food',
            color: 4,
        },
    ]
}

const notesStore = new NoteStore()
export {notesStore}