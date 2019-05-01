import React from "react";
import { Link } from "react-router-dom";

class Post extends React.Component {
  render() {
    const header = (
      <header>
        <Link to={`/users/${this.props.userId}`}>{this.props.name}</Link>
        <p>
          <time dateTime="2019-02-07">{this.props.date}</time>
        </p>
      </header>
    );

    const button = (
      <button
        id={this.props.postId}
        className="close"
        onClick={this.props.buttonHandler}
      >
        &#215;
      </button>
    );

    return (
      <section>
        {this.props.page === "feed" ? header : ""}
        {this.props.userId === "2" && this.props.page !== "feed" ? button : ""}
        <Link to="/">
          <img src={this.props.src} alt="" />
        </Link>
      </section>
    );
  }
}

export default Post;
