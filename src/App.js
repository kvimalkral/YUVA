// import logo from './logo.svg';
import './App.css';
import Header from './pages/header/header';
import {BrowserRouter,Route,Switch, Redirect} from 'react-router-dom';
import Singup from './pages/signup/singup';
import Login from './pages/login/login';
// import Users from './pages/users/users';
import Childclass from './pages/child/childClass';
import Servicesofferd from './pages/services/services';
// import Parent from './pages/parent/parent'
function App() {
  return (
    <div>



    <BrowserRouter>
    <Header color="bg-primary"></Header>
    <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={Singup} />
      <Route path="/services">
        <Servicesofferd color="btn btn-primary"></Servicesofferd>
      </Route>
      <Route path="/homeng">
        <div><h1>Home</h1></div>
      </Route>
      <Route path="/users">
        <Childclass></Childclass>
      </Route>
    <Redirect from="/" to="/login"></Redirect>
    </Switch>
    </BrowserRouter>

    </div>
    
  );
}

export default App;
