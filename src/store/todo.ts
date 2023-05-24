import { makeAutoObservable } from "mobx"
import { ItaskItem } from "../modules/todo/models"

class TodoStore {
  constructor() {
    makeAutoObservable(this)
  }




  todosArray: ItaskItem[] = (localStorage.getItem('todo')) == null
    ? []
    : JSON.parse(localStorage.getItem('todo') || '')


  addNewTask(taskItem: { title: string, body: string }) {
    this.todosArray = [...this.todosArray, taskItem]
    localStorage.setItem('todo', JSON.stringify(this.todosArray))
  }


  deleteTask(title: string) {
    this.todosArray = this.todosArray.filter(e => e.title !== title)
    localStorage.setItem('todo', JSON.stringify(this.todosArray))
  }
}

const todoStore = new TodoStore()
export { todoStore } 