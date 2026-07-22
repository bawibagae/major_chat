import "../css/profile.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [member, setMember] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("memberId");

    axios.get(`http://localhost:8080/members/${id}`).then((res) => {
      setMember(res.data);
    });
  }, []);

  if (!member) {
    return <div>로딩중...</div>;
  }
  return (
    <div className="Profile">
      <div>
        <h1>{member.loginId}</h1>
        <p>{member.major}</p>
      </div>
    </div>
  );
}

export default Profile;
