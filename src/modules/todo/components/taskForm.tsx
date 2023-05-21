// import { AddTask } from '@mui/icons-material'
import { Button } from '@mui/material'
import { ButtonGroup } from '@mui/material'
import { Box } from '@mui/system'
import AddTask from './addTask'


const buttons = [
    <Button variant='contained' key='all'>All</Button>,
    <Button key='active'>Active</Button>,
    <Button key='done'>Done</Button>,
]


const TaskForm = () => {
    return (
       <Box
       display={'flex'}
       justifyContent={'space-between'}
       >
        <ButtonGroup sx={{height:'40px'}}>
            {buttons}
        </ButtonGroup>
        <AddTask/>
 
       </Box>
    )
}

export default TaskForm