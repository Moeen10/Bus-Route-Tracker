import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Buses from './components/Buses/Buses';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import AddBus from './components/Admin/AddBus/addBus';
import Payment from './components/Payment';

import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <head>
        <title>BUS ROUTE TRACKER</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300&display=swap" rel="stylesheet" />
      </head>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/bus">
            <Buses />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>


          <Route path='/admin/addBus'>
            <AddBus />
          </Route>


        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
