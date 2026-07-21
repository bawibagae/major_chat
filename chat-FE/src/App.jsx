import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatPage from "./chat/ChatPage";
import Post from "./post/Post";
import Main from "./main/Main";
import SignUp from "./login/SignUp";
import Login from "./login/Login";
import Profile from "./profile/Profile";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/post" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
