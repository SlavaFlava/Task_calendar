import { useState } from "react";
import { Button, TextField } from "@mui/material"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { todoStore } from "../../../store/todo";

const AddTask = () => {
    const [open, setOpen] = useState(false);
    const [taskItem, setTaskItem] = useState({title:'',body:''})
    const [body, setBody] = useState('')
    console.log("🚀 ~ file: addTask.tsx:13 ~ AddTask ~ body:", body)


    return (
        <>
            <Button variant="outlined"
                sx={{ height: '40px' }}
                onClick={() => setOpen(true)}
            >
                Add New Task
            </Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                maxWidth={'sm'}
                fullWidth={true}
            >
                <DialogTitle>
                    New Task
                </DialogTitle>
                <DialogContent sx={{ pb: 0 }}>
                    <TextField
                        fullWidth
                        value={taskItem.title}
                        onChange={e => setTaskItem({...taskItem, title: e.target.value}) }
                        label='Task name'
                        sx={{ mb: 2, mt: 1 }}
                    />
                    <TextField
                        fullWidth
                        onChange={e => setTaskItem({...taskItem, body: e.target.value}) }
                        value={taskItem.body}
                        label='Task description'
                    />
                </DialogContent>
                <DialogActions sx={{ p: 3 }}>
                    <Button variant='outlined'
                        onClick={() => setOpen(true)}
                    >
                        Cancel
                    </Button>
                    <Button variant='outlined'
                        onClick={() =>{ 
                            setOpen(true);
                            todoStore.addNewTask(taskItem)
                            setTaskItem({title:'',body:''})  
                        }}
                    >
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )

}

export default AddTask