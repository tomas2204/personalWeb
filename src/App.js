import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react'
import Profile from './components/profile/Profile'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Profile}/>
      </Switch>
    </Router>
  )
}


export default App;
