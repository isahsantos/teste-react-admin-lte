import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './partials/Header';
import Footer from './partials/Footer';
import Home from './component/Home';
import Dashboard from './component/Dashboard';
import Notas from './component/Notas';
import Menu from './partials/Menu';

import Note from './notas.json';

const Notes = Note;
console.log(Notes);

function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <div className="content-wrapper px-4 py-2">
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/notas" component={Notas}/>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
