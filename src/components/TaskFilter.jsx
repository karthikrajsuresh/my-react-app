import React from 'react';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';

function TaskFilter({ filter, setFilter }) {
  const handleFilter = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={handleFilter}
        aria-label="task filter"
      >
        <ToggleButton value="all" aria-label="all tasks">
          All
        </ToggleButton>
        <ToggleButton value="active" aria-label="active tasks">
          Active
        </ToggleButton>
        <ToggleButton value="completed" aria-label="completed tasks">
          Completed
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default TaskFilter;