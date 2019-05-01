import React from "react";
import { Link } from "react-router-dom";

const Post = ({ name, date, src, page }) => {
  const header = (
    <header>
      <p>{name}</p>
      <p>
        <time dateTime="2019-02-07">{date}</time>
      </p>
    </header>
  );

  return (
    <section>
      {page === "feed" ? header : ""}
      <Link to="/">
        <img src={src} alt="" />
      </Link>
    </section>
  );
};

export default Post;
