import { Link } from "react-router-dom";
import "../css/Main.css";
import { ReactComponent as Icon1 } from "../images/material-symbols--home-outline.svg";
import { ReactComponent as Icon2 } from "../images/material-symbols--post-add.svg";
import { ReactComponent as Icon3 } from "../images/mdi--chat-outline.svg";
import { ReactComponent as Icon4 } from "../images/mdi--bell-outline.svg";
import { ReactComponent as Icon5 } from "../images/iconamoon--profile-bold.svg";

function Main() {
  return (
    <div className="Main">
      <header>
        <ul>
          <li>
            <Link to={"/main"}>
              <Icon1 />
            </Link>
          </li>
          <li>
            <Link to={"/post"}>
              <Icon2 />
            </Link>
          </li>
          <li>
            <Link to={"/chat"}>
              <Icon3 />
            </Link>
          </li>
          <li>
            <Link to={"/bell"}>
              <Icon4 />
            </Link>
          </li>
          <li>
            <Link to={"/profile"}>
              <Icon5 />
            </Link>
          </li>
          <li>
            <Link to={"/signup"}>회원가입</Link>
            <span>/</span>
            <Link to={"/login"}>로그인</Link>
          </li>
        </ul>
      </header>
      <div></div>
      <nav>
        <div></div>
        <div></div>
        <div></div>
      </nav>
    </div>
  );
}

export default Main;
