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
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
    <Register/>
    </BrowserRouter>
  );
}

export default App;
