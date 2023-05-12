
import React, { useState } from "react";

import "../styles/newPost.css";

function NewPost() {
    const [newPost, setNewPost] = useState("");
    const [postImage, setPostImage] = useState("");

    const sendPost = (e) => {
        e.preventDefault();

      

        setNewPost("");
        setPostImage("");
    };

    return (
        <div className="postBox">
            <form>
                <div className="postBox__input">

                    <input
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        placeholder="What's up?"
                        type="text"
                    />
                </div>
                <input
                    placeholder="Optional: Enter image URL"
                    value={postImage}
                    onChange={(e) => setPostImage(e.target.value)}
                    type="text"
                    className="tweetBox__imageInput"
                />
                <button onClick={sendPost} type="submit" className="postBox__button">
                    Post!
                </button>
            </form>
        </div>
    );
}

export default NewPost;