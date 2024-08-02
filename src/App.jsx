// import React, { useState } from 'react'
// import { Container, Typography, Box } from '@mui/material'
// import TaskList from './components/TaskList'
// import AddTaskForm from './components/AddTaskForm'
// import './App.css'

// function App() {
//   const [tasks, setTasks] = useState([])

//   const addTask = (newTask) => {
//     setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
//   }

//   const toggleTask = (id) => {
//     setTasks(tasks.map(task => 
//       task.id === id ? { ...task, completed: !task.completed } : task
//     ))
//   }

//   const deleteTask = (id) => {
//     setTasks(tasks.filter(task => task.id !== id))
//   }

//   return (
//     <Container maxWidth="sm">
//       <Box my={4}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Task Manager
//         </Typography>
//         <AddTaskForm onAddTask={addTask} />
//         <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
//       </Box>
//     </Container>
//   )
// }

// export default App

import React, { useState } from 'react';
import { Container, Box, Paper } from '@mui/material';
import Header from './MUI-components/Header';
import Footer from './MUI-components/Footer';
import TaskList from './MUI-components/TaskList';
import AddTaskForm from './MUI-components/AddTaskForm';
import TaskFilter from './MUI-components/TaskFilter';
import TaskStatistics from './MUI-components/TaskStatistics';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <AddTaskForm onAddTask={addTask} />
          <TaskFilter filter={filter} setFilter={setFilter} />
          <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
          <TaskStatistics tasks={tasks} />
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;