"use client";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AddTaskForm from '@/components/AddTaskForm';
import Task from '@/components/Task';
import axios from 'axios';
import { useState, useEffect, use } from 'react';
import { API_URL } from '@/utils';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function App() {
  const [task, setTask] = useState([]);
  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(API_URL)

      setTask(data)
    } catch (error) {
      console.log(error)

    }
  };

  useEffect(() => {
    fetchTasks()
  }, [])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <AddTaskForm fetchTasks={fetchTasks} />
        {
          task.map((task) => (
            <Task key={task.id} fetchTasks={fetchTasks} task={task} />
          ))
        }

      </div>
    </ThemeProvider>
  );
}
