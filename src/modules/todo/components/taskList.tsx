import { Box } from '@mui/material'
import TaskItem from './taskItem'
import { todoStore } from '../../../store/todo'
import { observer } from 'mobx-react'
import { useEffect } from 'react'



const TaskList = observer(() => {




  return (
    <Box my={2.5} >
      {
        todoStore.todosArray.map((task) => {
          if (todoStore.currentDate == task.date && (todoStore.filterTasks == task.status || todoStore.filterTasks == null)) {
            return (
              <TaskItem title={task.title} body={task.body} key={task.id} id={task.id} status={task.status} />
            )
          }
        })
      }
    </Box>
  )
})

export default TaskList