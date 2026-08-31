import { useState } from 'react';
import { useTasks } from '../context/TaskContext';

export function TaskForm() {
  const { dispatch } = useTasks();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Academic');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch({ type: 'ADD_TASK', payload: { title, category } });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Academic">Academic</option>
        <option value="Personal">Personal</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}