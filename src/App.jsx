import './App.css'
import { AuthProvider } from './context/AuthProvider';
import AppRouter from './Routes/AppRouter';


function App() {

  return (
    <>
        <AuthProvider>
            <AppRouter/>
        </AuthProvider>
    </>
  )
}

export default App
