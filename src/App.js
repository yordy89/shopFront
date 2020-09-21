import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Home from 'Pages/Home';
import {Provider} from 'react-redux'
import generateStore from 'Redux/store'
import Admin from 'Pages/Admin';
import Shop from 'Pages/Shop'

function App() {
  const store = generateStore()

  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/admin' component={Admin}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/' component={Home}/>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
