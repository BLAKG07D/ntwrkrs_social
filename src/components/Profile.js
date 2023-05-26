import React, { Component } from 'react';
import '../styles/profile.css';
import Sidebar from './Sidebar';
import PostImage from './post/PostImage';
class Profile extends Component {
  state = {
    user: {
      name: 'Robert Armstrong',
      profileImage: 'https://twitter.com/blakg07d/photo',
      bio: 'Fullstack developer | Web developer | Mobile developer | Fullstack developer | Web developer | Mobile developer | Fullstack developer |',
    },
  };

  render() {
    const { user } = this.state;

    return (
      <div className="profile-page">
    <Sidebar/>
        <div className="profile-header">
         <PostImage />
          <h1>{user.name}</h1>
        </div>
        <div className="profile-bio">
          {user.bio}
        </div>
       
      </div>
    );
  }
}

export default Profile;