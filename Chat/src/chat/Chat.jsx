import { useCallback, useEffect, useRef, useState } from "react";
import "../css/chat.css";
import axios from "axios";

function Chat({ roomId }) {
  const myId = Number(localStorage.getItem("memberId"));
  const [chatMessage, setChatMessage] = useState([]);
  const [message, setMessage] = useState({
    memberId: myId,
    message: "",
  });
  const getChatMessage = useCallback(() => {
    axios.get(`http://localhost:8080/chat/${roomId}`).then((res) => {
      setChatMessage(res.data);
    });
  }, [roomId]);
  useEffect(() => {
    getChatMessage();
  }, [getChatMessage]);

  const postChatMessage = () => {
    axios
      .post("http://localhost:8080/chat", {
        ...message,
        roomId: Number(roomId),
      })
      .then((res) => {
        getChatMessage();
        setMessage({
          memberId: myId,
          message: "",
        });
      })
      .catch((err) => console.log(err));
  };
  const bottomRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }, [chatMessage]);
  return (
    <div className="Chat">
      <div className="message">
        {chatMessage.map((msg) => (
          <div
            key={msg.id}
            className={msg.memberId === myId ? "my-message" : "other-message"}
          >
            {msg.message}
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>

      <div className="input">
        <input
          value={message.message}
          onChange={(e) =>
            setMessage({
              ...message,
              message: e.target.value,
            })
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              postChatMessage();
            }
          }}
        />
      </div>
    </div>
  );
}
export default Chat;
