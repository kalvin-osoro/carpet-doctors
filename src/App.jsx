import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { PublicRoutes } from './components/routes';

const  App = () => {
  return (
    
    <Router>
      <PublicRoutes />
    </Router>
  );
}

export default App;
