// import { AddTask } from '@mui/icons-material'
import { Button } from '@mui/material'
import { ButtonGroup } from '@mui/material'
import { Box } from '@mui/system'
import { observer } from 'mobx-react'
import AddTask from './addTask'
import { todoStore } from './taskItem'




const TaskForm = observer(() => {
  const buttons = [
    <Button variant={todoStore.filterTasks == null ? 'contained' : 'outlined'} key='all'onClick={()=> {todoStore.filteredTasks(null)}}>All</Button>,
    <Button variant={todoStore.filterTasks == true ? 'contained' : 'outlined'} key='active' onClick={()=> {todoStore.filteredTasks(true)}}>Active</Button>,
    <Button variant={todoStore.filterTasks == false ? 'contained' : 'outlined'} key='done' onClick={()=> {todoStore.filteredTasks(false)}}>Done</Button>,
  ]

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
    >
      <ButtonGroup sx={{ height: '40px' }}>
        {buttons}
      </ButtonGroup>
      <AddTask />

    </Box>
  )
})

export default TaskForm