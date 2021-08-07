import { BrowserRouter as Router , Switch , Route  } from 'react-router-dom';
import NaviBar from './components/NavigationBar'
import Home from './components/Home'
import AddReport from './components/AddReport';
import ReportView from './components/ReportView';
import React from 'react';

const Username = 'ccup';
export const User = React.createContext(Username);


function App() {

  return (
    <Router>
      <User.Provider value={Username}>
      < NaviBar />
      <Switch>
        <Route exact path ='/'>
          <Home/>
        </Route> 
        <Route path = "/AddReport">
          <AddReport/>
        </Route>
        <Route path="/reports/:id">
          <ReportView/>
        </Route>
      </Switch>
      </User.Provider>
    </Router>
  
  );
}

export default App
