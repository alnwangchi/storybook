import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <h1 className='bg-orange-200 font-bold p-4'>Vite + React + Tailwind</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
