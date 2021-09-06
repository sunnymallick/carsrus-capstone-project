import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/UserProfile/User';
import AuctionsPage from './components/AuctionsPage';
import { authenticate } from './store/session';
import AuctionDetail from './components/AuctionDetail';
import AuctionForm from './components/AuctionForm';
import Footer from './components/Footer';
// import PastAuctions from './components/PastAuctions';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route path='/' exact={true} >
          <AuctionsPage />
        </Route>
      <Route path='/auctions/:id' exact={true}>
        <AuctionDetail />
      </Route>
      {/* <Route path='/past-auctions' exact={true}>
        <PastAuctions />
      </Route> */}
      <Route path='/form' exact={true}>
        <AuctionForm />
      </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
