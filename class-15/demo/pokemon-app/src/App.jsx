import './App.css'
import AuthButtons from './components/auth/AuthButtons';
import { useAuth0 } from '@auth0/auth0-react';
import Pokedex from './components/Pokedex';

function App() {
  const { isAuthenticated } = useAuth0(); // a hook, don't use within a class component

  return (
    <>
      <AuthButtons />
      { isAuthenticated ? <Pokedex /> : <h2>Please log in to see pokemon</h2> }
    </>
  )
}

export default App
