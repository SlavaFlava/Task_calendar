import { makeAutoObservable } from "mobx"
import { toJS } from "mobx"
import { ICategory } from "../modules/notes/components/models"
import { blueGrey, orange, purple ,teal} from "@mui/material/colors"

class NoteStore {
    constructor() {
        makeAutoObservable(this) 
    }

    notesArray: ICategory[] = [
        {
            categoryUrl:'game',
            name: 'Game',
            color: purple[400],
        },
        {
            categoryUrl:'my child',
            name: 'My child',
            color: teal[600],
        },
        {
            categoryUrl:'work',
            name: 'Work',
            color: orange[400],
        },
        {
            categoryUrl:'food',      
            name: 'Food',
            color: blueGrey[500],
        },
    ]
}

const notesStore = new NoteStore()
export {notesStore}