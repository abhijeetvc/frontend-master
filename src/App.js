import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ListUserComponent from './components/user/ListUserComponent'
import AddUserComponent from './components/user/AddUserComponent'
import EditUserComponent from './components/user/EditUserComponent'
 
function App() {
  return (
      <div className="container">
        <Router>
            <div className="col-md-6">
              <h1 className="text-center" style={style}>User Management Module</h1>
              <Switch>
              <Route path="/" exact component={ListUserComponent} />
                  <Route path="/getUser" component={ListUserComponent} />
                  <Route path="/add-user" component={AddUserComponent} />
                  <Route path="/editUser" component={EditUserComponent} />
              </Switch>
            </div>
        </Router>
      </div>
  );
}

const style={
  color:'black',
  margin:'12px'
}
export default App;
