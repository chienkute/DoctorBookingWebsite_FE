import axios from "axios";
const API = {
  GetChatbotResponse: async () => {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("Chào mừng bạn đã đến với Chatbot của Hibacsi!");
      }, 2000);
    });
  },
  GetChatbotResponseAI: async (question) => {
    const urlG2 = "https://api.openai.com/v1/chat/completions";
    const API_KEY = "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";
    const headers = {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    };
    const requestData = {
      model: "gpt-3.5-turbo-1106",
      messages: [
        {
          role: "user",
          content: `${question}`,
        },
      ],
      max_tokens: 500,
    };
    let answer = "";
    let data = [];
    try {
      const response = await axios.post(urlG2, requestData, { headers });
      if (response) {
        data = response?.data?.choices;
        data.map((item, index) => {
          answer = item?.message?.content;
        });
      }
      console.log(answer);
    } catch (error) {
      console.error("There was a problem with the request:", error);
    }
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(answer);
      }, 2000);
    });
  },
};

export default API;
