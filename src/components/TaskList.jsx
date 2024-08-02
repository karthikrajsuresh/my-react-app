import React from 'react'
import { List, ListItem, ListItemText, ListItemButton, Checkbox, IconButton, Typography } from '@mui/material'
import TaskItem from './TaskItem'
import DeleteIcon from '@mui/icons-material/Delete';

function TaskList({ tasks, onToggle, onDelete }) {
    return (
    <List sx={{ mt: 2 }}>
        {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
        ))}
            {tasks.length === 0 && (
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                    No tasks yet. Add some tasks!
                    </Typography>
                )}
                </List>
            );
}

export default TaskList