import { Box } from '@mui/material'
import TaskItem from './taskItem'
import { todoStore } from '../../../store/todo'
import { observer } from 'mobx-react'
import { useEffect } from 'react'



const TaskList = observer(() => {




    return (
        <Box my={2.5} >
            {
                todoStore.todosArray.map((task) => (
                    <TaskItem title={task.title} body={task.body} key={task.title} />
                ))
            }



        </Box>

    )
})

export default TaskList