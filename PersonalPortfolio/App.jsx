import { BrowserRouter, Routes, Route,Link, Outlet } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Me</h2>;
}

function Contact() {
  return <h2>Contact Me</h2>;
}

function DashboardLayout() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/settings">Settings</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

function Profile() {
  return <h2>Profile</h2>;
}

function Settings() {
  return <h2>Settings</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="profile" element={<Profile />}/>
            <Route path="settings" element={<Settings />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}