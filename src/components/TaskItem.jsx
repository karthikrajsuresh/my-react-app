import React from 'react'
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <ListItem>
      <Checkbox
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <ListItemText
        primary={task.text}
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(task.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default TaskItem