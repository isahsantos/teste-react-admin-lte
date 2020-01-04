import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './partials/Header';
import Footer from './partials/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
