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
            name: 'game',
            color: purple[400],
        },
        {
            name: 'child',
            color: teal[600],
        },
        {
            name: 'work',
            color: orange[400],
        },
        {
            name: 'food',
            color: blueGrey[500],
        },
    ]
}

const notesStore = new NoteStore()
export {notesStore}