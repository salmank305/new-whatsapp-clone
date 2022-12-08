import React from "react";
import Chatcontainer from "./Chatcontainer";
import Sidebar from "./Sidebar";
import "./ChatPage.css";

function ChatPage({ currentUser, signOut }) {
  return (
    <div className="chatpage">
      <div className="chatpage-container">
        {/* sidebar */}
        <Sidebar currentUser={currentUser} signOut={signOut} />
        {/* chat container */}
        <Chatcontainer currentUser={currentUser}/>
      </div>
    </div>
  );
}

export default ChatPage;
