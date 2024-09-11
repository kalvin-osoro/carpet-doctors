import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
      <Navbar />
        <Routes >
          <Route path='/' exact />
        </Routes>     
      </Router>
      
     {/* <h1>Finally!</h1> */}
    </div>
  );
}

export default App;
