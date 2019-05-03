import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class PostForm extends React.Component {
  handleSubmitButton = event => {
    event.preventDefault();
    axios
      .post("https://makinahgram-api.herokuapp.com/posts", {
        user_id: "2",
        image: event.target.elements.url.value
      })
      .then(response => {
        this.props.history.push("/users/2");
      })
      .catch(error => {
        //throw new Error("Could not fetch posts");
        console.log(error);
      });
  };

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmitButton}>
          <legend>Create a new post</legend>
          <label htmlFor="url">Image URL</label>
          <input type="text" id="url" name="url" />
          <button>Post!</button>
        </form>
      </main>
    );
  }
}

export default withRouter(PostForm);
