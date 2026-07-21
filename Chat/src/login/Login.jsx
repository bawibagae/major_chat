import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [member, setMember] = useState({
    loginId: "",
    password: "",
  });
  const navigate = useNavigate();
  const login = () => {
    axios
      .post("http://localhost:8080/members/login", member)
      .then((res) => {
        if (res.data) {
          localStorage.setItem("memberId", res.data.id);
          navigate("/");
        } else {
          alert("로그인 실패");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="Login">
      <input
        placeholder="아이디"
        value={member.loginId}
        onChange={(e) =>
          setMember({
            ...member,
            loginId: e.target.value,
          })
        }
      />

      <input
        type="password"
        placeholder="비밀번호"
        value={member.password}
        onChange={(e) =>
          setMember({
            ...member,
            password: e.target.value,
          })
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            login();
          }
        }}
      />

      <button onClick={login}>로그인</button>
    </div>
  );
}

export default Login;
