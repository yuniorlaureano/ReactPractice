import React, {Component} from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import {Link, Route} from 'react-router-dom';
import FullPost from '../../../containers/Blog/FullPost/FullPost';


class Posts extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    postSelectedHandler = (id) => {
        this.props.history.push({pathname: '/posts/' + id});
        this.setState({selectedPostId: id});
    }

    componentDidMount(){
        console.log(this.props);
        axios.get('/posts')
             .then(response => {
                 const posts = response.data.slice(0, 4);
                 const updatedPosts = posts.map(post => {
                     return {
                         ...post,
                         author: 'Max'
                     };
                 });
                 this.setState({posts: updatedPosts});
             })
             .catch(error => {
                 this.setState({error: true});
             });
    }

    render(){

        const posts = this.state.posts.map(post => {
            return (<Link  key={post.id} to={'/posts/' + post.id}>
                    <Post title={post.title} author={post.author} clicked={()=>this.postSelectedHandler(post.id)}/>
                </Link>)
        })

        return (
            <div>
                <Route path='/posts/:id' exact component={FullPost}/>
                <section className="Posts">
                    {posts}
                </section>  
            </div>
              
        );
    }
}

export default Posts;