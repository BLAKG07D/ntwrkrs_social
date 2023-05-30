import React, { Component } from 'react';
import '../styles/profile.css';
import Sidebar from './Sidebar';
import PostImage from './post/PostImage';
class Profile extends Component {
  state = {
    user: {
      name: 'Robert Armstrong',
      bio:this.props.bio||" Add a bio"
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