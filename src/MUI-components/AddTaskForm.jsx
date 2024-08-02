import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import DatePicker from '../PrimeReact-components/DatePicker';

function AddTaskForm({ onAddTask }) {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      console.log('Adding task:', { text: task, dueDate });
      onAddTask({ text: task, dueDate });
      setTask('');
      setDueDate(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" mb={2}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          sx={{ mb: 2 }}
        />
        <DatePicker value={dueDate} onChange={(e) => setDueDate(e.value)} />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Add
        </Button>
      </Box>
    </form>
  );
}

export default AddTaskForm;
