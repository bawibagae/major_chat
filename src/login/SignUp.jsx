import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [member, setMember] = useState({
    loginId: "",
    major: "",
    name: "",
    password: "",
  });
  const postMembers = () => {
    axios
      .post("http://localhost:8080/members", member)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="SignUp">
      <input
        placeholder="LoginId"
        value={member.loginId}
        onChange={(e) => setMember({ ...member, loginId: e.target.value })}
      />
      <input
        placeholder="major"
        value={member.major}
        onChange={(e) => setMember({ ...member, major: e.target.value })}
      />
      <input
        placeholder="name"
        value={member.name}
        onChange={(e) => setMember({ ...member, name: e.target.value })}
      />
      <input
        id="password"
        type="password"
        placeholder="password"
        value={member.password}
        onChange={(e) => setMember({ ...member, password: e.target.value })}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            postMembers();
          }
        }}
      />
    </div>
  );
}

export default SignUp;
