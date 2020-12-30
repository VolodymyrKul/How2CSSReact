//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Account from './components/Account';
import OwnAchievsList from './components/OwnAchievsList';
import AnotherAchievsList from './components/AnotherAchievsList';
import CompareAchievsList from './components/CompareAchievsList';
import SaveAchiev from './components/SaveAchiev'

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous"></link>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      <Router>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a className="navbar-brand" href="/">How2CSS</a>
          <ul className="navbar-nav">
            <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item">
                <a className="nav-link" href="/">Page 1</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Page 2</a>
            </li>
          </ul>
          <form className="navbar-form navbar-left form-inline">
            <div className="form-group">
                <input type="text" className="form-control mr-sm-2" placeholder="Search"></input>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/signup"><span><i className="fas fa-user-plus"></i></span> Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signin"><span><i className="fas fa-sign-in-alt"></i></span> Sign In</Link>
          </li>
        </ul>
      </nav>
        <Switch>
          <Route path="/signin" component={SignIn}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/account" component={Account}></Route>
          <Route path="/ownachievs" component={OwnAchievsList}></Route>
          <Route path="/antachievs" component={AnotherAchievsList}></Route>
          <Route path="/compareachievs" component={CompareAchievsList}></Route>
          <Route path="/saveachiev" component={SaveAchiev}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
