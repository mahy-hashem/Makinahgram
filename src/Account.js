import React from "react";
import axios from "axios";
import Post from "./Post";
import UserInfo from "./UserInfo";

class Account extends React.Component {
  state = {
    id: 2,
    posts: [],
    page: "account"
  };

  fetchPosts = () => {
    axios
      .get(`https://makinahgram-api.herokuapp.com/users/${this.state.id}`)
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

  componentDidMount() {
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
                  name={this.state.name}
                  date={date[0]}
                  src={post.image}
                  page={this.state.page}
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
