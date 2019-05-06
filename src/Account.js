import React from "react";
import axios from "axios";
import Post from "./Post";
import UserInfo from "./UserInfo";

class Account extends React.Component {
  state = {
    posts: [],
    page: "account"
  };

  fetchPosts = () => {
    axios
      .get(
        `https://makinahgram-api.herokuapp.com/users/${
          this.props.match.params.id
        }`
      )
      .then(response => {
        this.setState({
          name: response.data.name,
          followers: response.data.followers,
          following: response.data.following,
          thumbnail: response.data.thumbnail,
          posts: response.data.posts
        });
      })
      .catch(error => {
        //throw new Error("Could not fetch posts");
        console.log(error);
      });
  };

  deletePost(id) {
    axios
      .delete(`https://makinahgram-api.herokuapp.com/posts/${id}`)
      .then(response => {
        let posts = this.state.posts.filter(post => post.id !== +id);
        this.setState({ posts });
      })
      .catch(error => {
        //throw new Error("Could not fetch posts");
        console.log(error);
      });
  }

  handleClick = event => {
    this.deletePost(event.target.id);
  };

  componentDidMount() {
    this.fetchPosts();
  }

  componentDidUpdate() {
    this.fetchPosts();
  }

  render() {
    const postsNumber = this.state.posts.length;
    return (
      <main>
        <UserInfo
          name={this.state.name}
          followers={this.state.followers}
          following={this.state.following}
          thumbnail={this.state.thumbnail}
          postsNumber={postsNumber}
        />
        <div className="posts">
          {this.state.posts.map(post => {
            const date = post.created_at.split("T");
            return (
              <section>
                <Post
                  key={post.id}
                  userId={this.props.match.params.id}
                  name={this.state.name}
                  postId={post.id}
                  date={date[0]}
                  src={post.image}
                  page={this.state.page}
                  buttonHandler={this.handleClick}
                />
              </section>
            );
          })}
        </div>
      </main>
    );
  }
}

export default Account;
