import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './partials/Header';
import Footer from './partials/Footer';
import Home from './component/Home';
import Notas from './component/Notas';
import Menu from './partials/Menu';

import Note from './notas.json';


function App() {

  const [citas,guardarCitas] = useState(Note)

  
  return (
    <Router>
      <Header />
      <Menu />
      <div className="content-wrapper px-4 py-2">
        <Switch>
          <Route exact path="/" 
          render = { () => (
            <Home 
              citas = {citas}
            />
          )}/>
          <Route path="/notas" component={Notas}/>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
