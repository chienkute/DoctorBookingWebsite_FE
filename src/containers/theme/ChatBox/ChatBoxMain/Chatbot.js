import React, { useState, memo } from "react";
import UserMessage from "../component/UserMessage.js";
import Messages from "../component/Messages.js";
import Input from "../component/Input.js";
import API from "../ChatBoxMain/ChatbotAPI.js";
import "../ChatBoxMain/style.css";
import Header from "../component/Header";
import BotMessage from "../component/BotMessage.js";
function Chatbot(props) {
  const [messages, setMessages] = useState([]);
  const send = async (text) => {
    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />,
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => await API.GetChatbotResponseG2(text)}
      />,
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => await API.GetChatbotResponseT5(text)}
      />,
    );
    setMessages(newMessages);
  };
  return (
    <div className="chatbot">
      <Header setUp={props.setUp} />
      <Messages messages={messages} />
      <Input onSend={send} />
    </div>
  );
}
export default memo(Chatbot);
