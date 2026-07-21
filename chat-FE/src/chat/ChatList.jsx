import "../css/chat-list.css";
import axios from "axios";
import { useEffect, useState } from "react";

function ChatList({ onSelectRoom, onJoinRooms }) {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const myId = Number(localStorage.getItem("memberId"));
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/rooms")
      .then((res) => {
        setRooms(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const createRoom = () => {
    const roomName = prompt("채팅방 이름을 입력하세요.");
    if (!roomName || roomName.trim() === "") return;

    axios
      .post("http://localhost:8080/rooms", {
        roomName: roomName.trim(),
      })
      .then((res) => {
        setRooms((prev) => [...prev, res.data]);
      });
  };
  const enterRoom = () => {
    if (!selectedRoom) {
      alert("채팅방을 선택해주세요.");
      return;
    }
    axios
      .post(`http://localhost:8080/rooms/join`, null, {
        params: {
          roomId: selectedRoom.id,
          memberId: myId,
        },
      })
      .then(() => {
        onJoinRooms(selectedRoom.id);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="chat-list">
      {rooms.map((room) => (
        <div
          key={room.id}
          onClick={() => {
            setSelectedRoom(room);
            axios
              .get("http://localhost:8080/rooms/joined", {
                params: {
                  roomId: room.id,
                  memberId: myId,
                },
              })
              .then((res) => {
                if (res.data) {
                  onJoinRooms(room.id);
                } else {
                  onJoinRooms(null);
                  setSelectedRoom(room);
                }
              });
          }}
          className={selectedRoom?.id === room.id ? "selected" : ""}
        >
          {room.roomName}
        </div>
      ))}
      <button onClick={enterRoom}>가입</button>
      <button onClick={createRoom}>+</button>
    </div>
  );
}

export default ChatList;
