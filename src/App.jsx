import './App.css';
import Navbar from './components/navigation/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PublicRoutes } from './components/routes';

const  App = () => {
  return (
    
    <Router>
      <PublicRoutes />
    </Router>
  );
}

export default App;
