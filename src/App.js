import './App.css';
import Home from './pages'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignInPage from './pages/signin';
import Navbar from './components/Navbar';
import AccountPage from './pages/account';
import SignUpPage from './pages/signup';
import CardsPage from './pages/cards';
import TransactionsPage from './pages/transactions';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignInPage} exact />
        <Route path="/signup" component={SignUpPage} exact />
        <Route path="/account" component={AccountPage} exact />
        <Route path="/cards" component={CardsPage} exact />
        <Route path="/transactions" component={TransactionsPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
