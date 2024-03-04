import { IoMdChatbubbles, IoMdHome } from "react-icons/io";
import { RiContactsBookLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [profileMenu, setProfileMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <div className="top">
          <a href="/" className="logo">
            <IoMdHome />
          </a>
          <ul className="header-menu_items">
            <li className="header-menu_item">
              <a href="#">
                <IoMdChatbubbles />
              </a>
            </li>
            <li className="header-menu_item">
              <a href="#">
                <RiContactsBookLine />
              </a>
            </li>
            <li className="header-menu_item">
              <a href="#">
                <IoSettingsOutline />
              </a>
            </li>
          </ul>
        </div>
        <div className="bottomMenu">
          <li className="bottomMenu_item">
            <IoMoonOutline />
          </li>
          <li
            className="bottomMenu_item"
            onClick={() => setProfileMenu(!profileMenu)}
          >
            <IoPersonCircleOutline />
            <ul className={profileMenu ? "profileMenu active" : "profileMenu"}>
              <li>Profile</li>
              <li>Settings</li>
              <li
                onClick={() => {
                  localStorage.removeItem("user");
                  navigate("/login");
                }}
              >
                Log out
              </li>
            </ul>
          </li>
        </div>
      </header>
    </>
  );
}

export default Header;
