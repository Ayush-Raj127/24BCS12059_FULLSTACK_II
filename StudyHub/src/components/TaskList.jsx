import { useState, useMemo, useCallback } from 'react';
import { useTasks } from '../context/TaskContext';
import { TaskItem } from './TaskItem';

export function TaskList() {
  const { state, dispatch } = useTasks();
  const [filter, setFilter] = useState('All');

  const filteredTasks = useMemo(() => {
    if (filter === 'All') return state.tasks;
    return state.tasks.filter(t => t.category === filter);
  }, [state.tasks, filter]);

  const handleToggle = useCallback((id) => dispatch({ type: 'TOGGLE_TASK', payload: id }), [dispatch]);
  const handleDelete = useCallback((id) => dispatch({ type: 'DELETE_TASK', payload: id }), [dispatch]);

  return (
    <div>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Academic">Academic</option>
        <option value="Personal">Personal</option>
      </select>
      <ul>
        {filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} onToggle={handleToggle} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}