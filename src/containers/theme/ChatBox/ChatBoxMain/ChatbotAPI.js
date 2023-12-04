import axios from "axios";
const API = {
  GetChatbotResponse: async (message) => {
    const urlT5 = `https://9255-35-194-221-172.ngrok-free.app/t5?${message}`;
    const urlG2 = `https://9255-35-194-221-172.ngrok-free.app/g2?question=${message}`;
    const headers = {
      "Content-Type": "application/json",
    };
    // try {
    //   const response = await axios.post(url, { headers });
    //   if (response) {
    //     t5answer = response?.data?.answer;
    //   }
    //   console.log(response?.data?.answer);
    // } catch (error) {
    //   console.error("There was a problem with the request:", error);
    // }
    // return new Promise(function (resolve, reject) {
    //   setTimeout(function () {
    //     resolve(t5answer);
    //   }, 2000);
    // });
    try {
      const [responseT5, responseG2] = await Promise.all([
        new Promise((resolve) => {
          setTimeout(async () => {
            try {
              const result = await axios.post(urlT5, {}, { headers });
              resolve(result?.data?.answer);
            } catch (error) {
              console.error("There was a problem with the request:", error);
            }
          }, 2000);
        }),
        new Promise((resolve) => {
          setTimeout(async () => {
            try {
              const result = await axios.post(urlG2, {}, { headers });
              resolve(result?.data?.answer);
            } catch (error) {
              console.error("There was a problem with the request:", error);
            }
          }, 3000);
        }),
      ]);
      console.log("T5 Answer:", responseT5);
      console.log("G2 Answer:", responseG2);
      return [responseT5, responseG2];
    } catch (error) {
      console.error("There was a problem with the request:", error);
    }
  },
};

export default API;
