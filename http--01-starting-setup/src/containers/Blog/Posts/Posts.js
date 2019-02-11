import React, {Component} from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import {Link} from 'react-router-dom';


class Posts extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    postSelectedHandler = (id) => {
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
            return (<Link  key={post.id} to={'/' + post.id}>
                    <Post title={post.title} author={post.author} clicked={()=>this.postSelectedHandler(post.id)}/>
                </Link>)
        })

        return (
            <section className="Posts">
                {posts}
            </section>     
        );
    }
}

export default Posts;