import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

function TaskStatistics({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const activeTasks = totalTasks - completedTasks;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2, mb: 2 }}>
      <Chip label={`Total: ${totalTasks}`} color="primary" />
      <Chip label={`Active: ${activeTasks}`} color="secondary" />
      <Chip label={`Completed: ${completedTasks}`} color="success" />
    </Box>
  );
}

export default TaskStatistics;