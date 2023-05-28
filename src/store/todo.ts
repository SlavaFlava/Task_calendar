import { makeAutoObservable, toJS } from "mobx"
import { ItaskItem } from "../modules/todo/models"


class TodoStore {
  constructor() {
    makeAutoObservable(this)
  }

  filterTasks: null | boolean = null 

  todosArray: ItaskItem[] = (localStorage.getItem('todo')) == null
    ? []
    : JSON.parse(localStorage.getItem('todo') || '')


  addNewTask(taskItem: ItaskItem) {
    const newTask: ItaskItem = {
      ...taskItem,
      status: true,
      id: Date.now(),
    }
    this.todosArray.push(newTask)
    localStorage.setItem('todo', JSON.stringify(this.todosArray))
  }

  changeStatusTask(id: number | undefined) {
  
    this.todosArray.map((e) => {
      if (e.id == id) {
        e.status = !e.status
      } 
    })
   
    
    localStorage.setItem('todo', JSON.stringify(this.todosArray))
  }


  deleteTask(id: number | undefined) {
    this.todosArray = this.todosArray.filter(e => e.id !== id)
    localStorage.setItem('todo', JSON.stringify(this.todosArray))
  }

filteredTasks(filter:null | boolean){
  this.filterTasks = filter
}

}

const todoStore = new TodoStore()
export { todoStore }  