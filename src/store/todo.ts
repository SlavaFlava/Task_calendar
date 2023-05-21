import { makeAutoObservable } from "mobx"
import { orangeTheme, purpleTheme, blueTheme, blackTheme } from "../themes"

class TodoStore {
  constructor() {
    makeAutoObservable(this)
  }
  todosArray = [
    {
      title: 'drink beer',
      body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Placeat aut sit cumque repudiandae deserunt neque eveniet recusandae 
              ipsa corrupti esse, obcaecati qui minus? Nam quae optio ab labore tempora quam?`
    },

  ]
  addNewTask(taskItem: { title: string, body: string }){
    this.todosArray = [...this.todosArray, taskItem]
  }
}

const todoStore = new TodoStore()
export { todoStore }