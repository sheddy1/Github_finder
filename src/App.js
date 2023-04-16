import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import { render } from 'react-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
// import Users from './components/users/Users';
// import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import  Home from './components/pages/Home';
// import { Fragment } from 'react/cjs/react.production.min';
import About from './components/pages/About';
import User from './components/users/User';
import NotFound from './components/pages/NotFound';
// import { useState } from 'react';

import GithubState from './context/github/GithubState';

import AlertState from './context/alert/AlertState';

const App = () => {

  // const [alert, setAlert] = useState([]);

  // state = {
  //   users: [], 
  //   user: {},
  //   loading: false,
  //   alert: null,
  //   repos: []
  // }

  // foo = () => 'Bars';

  // async componentDidMount() {
    

  //   this.setState({loading: true});
  //   const res = await axios.get('https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}');

  //   this.setState({users: res.data, loading: false});

  //   // .then(res=> console.log(res.data));
  // }

  // //search github users
  

  // Get a single github user
  // const getUser = async  username =>{
  //   setLoading(true);
  //   // console.log(text);
   
  //  const res = await axios.get(`http://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //  setUser(res.data);
  //  setLoading(false);
  // }

  //clear users
  // const clearUsers = () => {
  //   setUsers([]);
  //   setLoading(false);
  // }

  // Get users repos
  // const getUserRepos = async  username =>{
  //   setLoading(true);
  //   // console.log(text);
   
  //  const res = await axios.get(`http://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //  setRepos(res.data);
  //  setLoading(false);
  // }


  //set alert
  // const showAlert = (msg, type) =>{
  //     // this.setState({alert: {msg: msg, type: type} });
  //     setAlert({msg, type});

  //     // setTimeout(() => this.setState({alert: null}), 5000)
  //     setTimeout(() => setAlert(null), 5000);
  // }

  
  
    
    return (
      <GithubState>
        <AlertState>
      <Router>
      <div className="app">
       <Navbar title="Github Finder" icon='fab fa-github'/>
       <div className="container">
         <Alert />

        <Switch>
          <Route exact path='/' component ={Home} /> 

          <Route exact path='/about' component={About}/>

          <Route exact path='/user/:login' component ={User} />

          <Route component={NotFound} />
        </Switch>

         
       </div>
       
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );
  
 
}

export default App;
