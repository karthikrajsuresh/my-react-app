import React, { useState } from 'react'
import { TextField, Button, Box } from '@mui/material'

function AddTaskForm({ onAddTask }) {
  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task.trim()) {
      onAddTask(task)
      setTask('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" mb={2}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ ml: 1 }}>
          Add
        </Button>
      </Box>
    </form>
  )
}

export default AddTaskForm