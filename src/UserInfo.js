import React from "react";

const UserInfo = ({ name, followers, following, thumbnail, postsNumber }) => {
  return (
    <section className="user-info">
      <img src={thumbnail} alt="User" />
      <div className="user-data">
        <h2>{name}</h2>
        <div className="stats">
          <div>
            <p>{followers}</p>
            <p>Followers</p>
          </div>
          <div>
            <p>{following}</p>
            <p>Following</p>
          </div>
          <div>
            <p>{postsNumber}</p>
            <p>Posts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
