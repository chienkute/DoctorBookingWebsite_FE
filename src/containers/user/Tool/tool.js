import { memo, useState } from "react";
import "./tool.scss";
import { BiSolidCategory } from "react-icons/bi";
import axios from "axios";
const Tool = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  console.log(response);
  const handleQuestionSubmit = async () => {
    try {
      const url = "https://71b5-34-67-131-170.ngrok-free.app/gpt2";
      const headers = { "Content-Type": "application/json" };
      const requestData = { question };

      const response = await axios.post(url, requestData, { headers });

      if (response.status === 200) {
        setResponse(response.data);
      }
    } catch (error) {
      console.error("There was a problem with the request:", error);
    }
  };
  return (
    <div className="tool">
      <div className="tool__header category__header d-flex align-items-center">
        <div className="category__icon_header">
          <BiSolidCategory></BiSolidCategory>
        </div>
        <a href="/categories" className="color-black fs-normal-text">
          Công cụ kiểm tra sức khỏe
        </a>
      </div>
      <h1>Send Question</h1>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter your question..."
      />
      <button onClick={handleQuestionSubmit}>Submit</button>
      {response && (
        <div>
          <h2>Response</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};
export default memo(Tool);
