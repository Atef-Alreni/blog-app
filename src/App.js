import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App(){
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage /> 
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  ); 
}

export default App;