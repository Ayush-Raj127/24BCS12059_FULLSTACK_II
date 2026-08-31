import React from 'react';

export const TaskItem = React.memo(function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title} ({task.category})
      </span>
      <button onClick={() => onToggle(task.id)}>Toggle</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
});