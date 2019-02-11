import React, { Component } from 'react';
import './Blog.css';
//import axios from 'axios';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom';
import asynComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asynComponent(() => {

    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state = { auth: false};    

    render () {
       
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to="/" activeClassName="my-active" activeStyle={{
                                color: '#fa923f'
                            }}>Home</NavLink></li>
                            <li><NavLink to={
                                {
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                } 
                            }>New Post</NavLink></li>
                            {/*
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                            */}
                        </ul>
                    </nav>
                </header> 
                {/*<Route path="/" exact render={() => <Posts />}/>     
                <Route path="/" render={() => <h1>Home 2</h1>}/>  
                     */}
                     <Switch>
                        {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost}/>  : null}
                        <Route path="/" component={Posts}/>      
                        <Redirect from="/" to="/posts"/>        

                     </Switch>                                                       
            </div>
        );
    }
}

export default Blog;