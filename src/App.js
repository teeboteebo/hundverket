import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './sass/styles.scss';
import StartPage from './components/StartPage/StartPage'
import Link1 from './components/Link1/Link1'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/lank-1" component={Link1} />

        </Switch>
      </main>
      <Footer />
    </Router>
  )
}

export default App;
