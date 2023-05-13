import {React, useState} from "react";
import "../styles/sidebar.css";
import {Button, Modal} from "react-bootstrap"
import SidebarOption from "./SidebarOption";
import NewPost from "./NewPost";
function Sidebar(props) {

    const [isOpen, setIsOpen] = useState(false);
    const showNewPost = () => {
        setIsOpen(true);
    }
    const hideNewPost = () => {
        setIsOpen(false);
    }
    return (
        <div className="sidebar">
           
            <SidebarOption  text="Home" active={true} />
            <SidebarOption text="Explore" />
            <SidebarOption  text="Notifications" />
            <SidebarOption text="Messages" />
            <SidebarOption  text="Bookmarks" />
            <SidebarOption text="Lists" />
            <SidebarOption text="Profile" />
            <SidebarOption  text="More" />
           
            <Button onClick={showNewPost} type='submit'className="sidebar__post" >
                New Post
            </Button>
            <Modal show={isOpen} onHide={hideNewPost}>
                <Modal.Header closeButton>
                    <Modal.Title>New Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <NewPost/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hideNewPost}>CANCEL</Button>
                    <Button variant='primary' onClick={hideNewPost}>OK</Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default Sidebar;