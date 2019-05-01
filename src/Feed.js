import React from "react";
import axios from "axios";
import Post from "./Post";

class Feed extends React.Component {
  state = {
    posts: [],
    page: "feed"
  };

  fetchPosts = () => {
    axios
      .get("https://makinahgram-api.herokuapp.com/posts")
      .then(response => {
        this.setState({
          posts: response.data
        });
      })
      .catch(error => {
        //throw new Error("Could not fetch posts");
        console.log(error);
      });
  };

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    return this.state.posts.map(post => {
      const date = post.created_at.split("T");
      return (
        <Post
          key={post.id}
          name={post.user.name}
          date={date[0]}
          src={post.image}
          page={this.state.page}
        />
      );
    });
  }
}

export default Feed;
