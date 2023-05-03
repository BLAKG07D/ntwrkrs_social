import React from "react";
import "../styles/sidebar.css";
import SidebarOption from "./SidebarOption";
function Sidebar() {
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

            <button type='submit'className="sidebar__post" >
                What's Up?
            </button>
        </div>
    );
}

export default Sidebar;