import React from "react";
import { FaRocketchat } from "react-icons/fa";
import s from "./ChatLists.module.scss";
const ChatLists = () => {
  return (
    <div className={s.chat}>
      <div className={s.chatTitle}>
        <h1>Chats</h1>
        <FaRocketchat />
      </div>
      <div className={s.group}>
        <div className={s.groupImg}>
          <img
            src="https://w7.pngwing.com/pngs/635/472/png-transparent-teamwork-logo-team-work-group-of-five-people-illustration-hand-team-happy-birthday-vector-images-thumbnail.png"
            alt="team-img"
          />
        </div>
        <div className={s.groupTitle}>
          <h2>Growth Hungry 🔥</h2>
          <p>typing...</p>
        </div>
      </div>
    </div>
  );
};

export default ChatLists;
