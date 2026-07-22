import ChatList from "./ChatList";
import Chat from "./Chat";
import { useState } from "react";
import "../css/chatpage.css";

function ChatPage() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [joinedRooms, setJoinedRooms] = useState(null);
  return (
    <div className={`chat-layout ${joinedRooms ? "has-room" : ""}`}>
      <div className="chat-list-panel">
        <ChatList onSelectRoom={setSelectedRoom} onJoinRooms={setJoinedRooms} />
      </div>
      {joinedRooms && (
        <div className="chat-panel">
          <Chat roomId={joinedRooms} />
        </div>
      )}
    </div>
  );
}

export default ChatPage;
