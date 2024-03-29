import React, {useReducer} from 'react';
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import{
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types'

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}
else{
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
    const initialState = {
        users: [],
        user: [],
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search USers
    const searchUsers = async text => {

        // this.setState({loading: true});
        setLoading();
        //  console.log(text);
        
        const res = await axios.get(`http://api.github.com/search/users?q=${text}&client_id=${
            githubClientId}&client_secret=${githubClientSecret}`);
    
        // this.setState({users: res.data.items, loading: false});
    
        dispatch({
            type:  SEARCH_USERS,
            payload: res.data.items
        });
        
    
      };

    // GEt user
    const getUser = async  username =>{
        setLoading();
        // console.log(text);
       
       const res = await axios.get(`http://api.github.com/users/${username}?client_id=${
           githubClientId}&client_secret=${githubClientSecret}`);
    
       dispatch({
            type: GET_USER,
            payload: res.data
       });
      };

    // get repos
    const getUserRepos = async  username =>{
        setLoading();
        // console.log(text);
       
       const res = await axios.get(`http://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
           githubClientId}&client_secret=${githubClientSecret}`);
    
       dispatch({
            type: GET_REPOS,
            payload: res.data
       });
      };

    // clear users
    const clearUsers = () => dispatch ({type: CLEAR_USERS})

    // set loading
    const setLoading = () => dispatch({type: SET_LOADING});
    
    return <GithubContext.Provider
    value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
    }}
    >

    {props.children}

    </GithubContext.Provider>
    
}

export default GithubState;