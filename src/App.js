import Register from './pages/Register';
import Login from './pages/Login.jsx'
import Home from './pages/Home';
import "./styles.scss"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (
    <>
    {/* <Home/> */}
    <Register/>
    {/* <Login /> */}
    </>
  );
}

export default App;
