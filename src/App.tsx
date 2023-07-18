import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <h2 className='bg-orange-200 font-bold p-4'>Vite + React + Tailwind</h2>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
