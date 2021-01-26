import '../App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignInPage from '../pages/signin';
import Navbar from './Navbar';
import AccountPage from '../pages/account';
import Home from '../pages/index'
import SignUpPage from '../pages/signup';
import CardsPage from '../pages/cards';
import UpdateProfilePage from '../pages/updateProfile';
import TransactionsPage from '../pages/transactions';
import NewTransactionPage from '../pages/newTransaction';
import CardDetailsPage from '../pages/cardDetails';
import TransactionDetailsPage from '../pages/transactionDetails';
import { AuthProvider } from '../context/AuthContext';
import PrivateRoute from './PrivateRoute';
import ForgotPage from '../pages/forgotPass';

function App() {
  return (
      <Router>
          <AuthProvider>
            <Navbar />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/signin" component={SignInPage} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/forgot-password" component={ForgotPage} />
              <PrivateRoute path="/account" component={AccountPage} />
              <PrivateRoute path="/update-profile" component={UpdateProfilePage} />
              <PrivateRoute path="/cards" component={CardsPage} exact />
              <PrivateRoute path="/transactions" component={TransactionsPage} />
              <PrivateRoute path="/new-transaction" component={NewTransactionPage} />
              <PrivateRoute path="/cardDetails/:id" component={CardDetailsPage} />
              <PrivateRoute path="/transactionDetails/:id" component={TransactionDetailsPage} />
            </Switch>
          </AuthProvider>
          
      </Router>    
  );
}

export default App;
