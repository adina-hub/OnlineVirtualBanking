import './App.css';
import Home from './pages'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignInPage from './pages/signin';
import Navbar from './components/Navbar';
import SignUp from './components/Signup';
import AccountPage from './pages/account';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignInPage} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/account" component={AccountPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
