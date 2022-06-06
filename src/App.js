import "./App.css";
import Navbar from './components/Navbar/Navbar'
import Home from "./pages/Home";
import {Routes,Route}  from 'react-router-dom'
import RequiredAuth from './hoc/RequiredAuth'
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
