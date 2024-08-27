

import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

const AddTaskForm = ({ fetchTasks }) => {
    const [newTask, setNewTask] = useState("")
    const addnewTask = async () => {
        try {
            await axios.post(API_URL, { name: newTask, completed: false })

            await fetchTasks();

            setNewTask("");
        } catch (error) {
            console.log(error)

        }
    }
    return (
        <div>
            <Typography align='center' variant="h2" paddingTop={2}>My Task List</Typography>
            <div className='addTaskForm'>
                <TextField size='small' onChange={(e) => setNewTask(e.target.value)} value={newTask} id="outlined-basic" label="Task" variant="outlined" />
                <Button disabled={!newTask.length} variant='outlined' onClick={addnewTask} color='success'>
                    <AddIcon />
                </Button>
            </div>
        </div>
    )
}

export default AddTaskForm