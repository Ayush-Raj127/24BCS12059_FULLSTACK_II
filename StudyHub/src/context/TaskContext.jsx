import { createContext, useContext, useReducer } from 'react';

const TaskContext = createContext();

const initialStudent = { name: "Priya Nair", email: "priya@gmail.com", year: "3rd Year" };
const initialTasks = [
  { id: 1, title: "Submit React Assignment", category: "Academic", completed: false },
  { id: 2, title: "Buy Groceries", category: "Personal", completed: true }
];

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, { ...action.payload, id: Date.now(), completed: false }] };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(t => t.id === action.payload ? { ...t, completed: !t.completed } : t)
      };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter(t => t.id !== action.payload) };
    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, { student: initialStudent, tasks: initialTasks });

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
}