import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Buses from './components/Buses/Buses';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import AddBus from './components/Admin/AddBus/addBus';
import Payment from './components/Payment';
// import Shop from './components/Shop/Shop';

import Header from './Header/Header';

function App() {
  return (
    <div className="App">
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
