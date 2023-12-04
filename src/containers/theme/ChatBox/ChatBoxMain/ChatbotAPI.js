import axios from "axios";
const API = {
  GetChatbotResponseG2: async (question) => {
    const urlG2 = "https://71b5-34-67-131-170.ngrok-free.app/gpt2";
    const headers = {
      "Content-Type": "application/json",
    };
    const requestData = { question };
    let g2answer = "";
    try {
      const response = await axios.post(urlG2, requestData, { headers });
      if (response) {
        g2answer = response?.data?.answer;
      }
      console.log(response?.data?.answer);
    } catch (error) {
      console.error("There was a problem with the request:", error);
    }
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(g2answer);
      }, 2000);
    });
  },
  GetChatbotResponseT5: async (question) => {
    const urlT5 = "https://71b5-34-67-131-170.ngrok-free.app/t5";
    const headers = {
      "Content-Type": "application/json",
    };
    const requestData = { question };
    let t5answer = "";
    try {
      const response = await axios.post(urlT5, requestData, { headers });
      if (response) {
        t5answer = response?.data?.answer;
      }
      console.log(response?.data?.answer);
    } catch (error) {
      console.error("There was a problem with the request:", error);
    }
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(t5answer);
      }, 3000);
    });
  },
};

export default API;
