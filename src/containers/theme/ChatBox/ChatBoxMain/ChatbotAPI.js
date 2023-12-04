import axios from "axios";
const API = {
  GetChatbotResponse: async (message) => {
    const url = `https://9255-35-194-221-172.ngrok-free.app/t5?${message}`;
    let t5answer = "chào bạn";
    let g2answer = "hello";
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const response = await axios.post(url, { headers });
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
      }, 2000);
    });
  },
};

export default API;
