import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './partials/Header';
import Footer from './partials/Footer';
import Home from './component/Home';
import Dashboard from './component/Dashboard';
import Notas from './component/Notas';
import Menu from './partials/Menu';

function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/notas" component={Notas}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
