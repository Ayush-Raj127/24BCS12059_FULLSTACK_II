import { TaskProvider, useTasks } from './context/TaskContext';
import { Profile } from './components/Profile';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';

function MainApp() {
  const { state } = useTasks();
  return (
    <main style={{ padding: '20px' }}>
      <h1>StudyHub</h1>
      <Profile student={state.student} />
      <TaskForm />
      <TaskList />
    </main>
  );
}

export default function App() {
  return (
    <TaskProvider>
      <MainApp />
    </TaskProvider>
  );
}