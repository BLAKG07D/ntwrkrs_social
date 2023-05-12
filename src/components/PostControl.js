import React from "react";
import axios from "axios";
class PostControls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      post: ""
    };
  }

  handleEdit = async e => {
     await axios.put("http://localhost:3001/update/post", {
    _id: this.props.id,
      postContent: this.state.post
    });

    this.setState({ post: e.target.value });
  };

  handleDelete = async e => {
    try {
    await axios.delete("http://localhost:3001/delete/post",{_id:this.props.id});
    }
    catch(err) {
          console.log(err);
        }
  }
}


export default PostControls;