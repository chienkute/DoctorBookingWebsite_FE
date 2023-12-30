import React from "react";
import "./BMIToolHomePage.scss";

import { FaMale, FaFemale } from "react-icons/fa";

class BMIToolHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "male",
      age: 0,
      height: 0,
      weight: 0,
      bmiResult: null,
    };
  }
  handleGenderChange = (selectedGender) => {
    this.setState({ gender: selectedGender });
  };

  handleAgeChange = (event) => {
    this.setState({ age: parseInt(event.target.value, 10) });
  };

  handleHeightChange = (event) => {
    this.setState({ height: parseInt(event.target.value, 10) });
  };

  handleWeightChange = (event) => {
    this.setState({ weight: parseInt(event.target.value, 10) });
  };

  calculateBMI = () => {
    const { height, weight } = this.state;
    const heightInMeter = height / 100;
    const bmi = weight / (heightInMeter * heightInMeter);
    this.setState({ bmiResult: bmi });
  };

  getBMICategory = () => {
    const { bmiResult } = this.state;
    if (bmiResult < 18.5) return "Thiếu cân";
    if (bmiResult >= 18.5 && bmiResult < 24.9) return "Bình thường";
    if (bmiResult >= 25 && bmiResult < 29.9) return "Thừa cân";
    return "Béo phì";
  };

  getBMIAdvice = () => {
    const { bmiResult } = this.state;
    if (bmiResult < 18.5)
      return "Bạn cần tăng cường dinh dưỡng để đạt trọng lượng lý tưởng.";
    if (bmiResult >= 18.5 && bmiResult < 24.9)
      return "Bạn đang ở trong mức trọng lượng lý tưởng, hãy duy trì chế độ dinh dưỡng và vận động thường xuyên.";
    if (bmiResult >= 25 && bmiResult < 29.9)
      return "Bạn cần giảm cân để duy trì sức khỏe tốt.";
    return "Bạn cần có chế độ dinh dưỡng và lối sống lành mạnh.";
  };

  getBMIColor = () => {
    const { bmiResult } = this.state;
    if (bmiResult < 18.5) return "#4287f5";
    if (bmiResult >= 18.5 && bmiResult < 24.9) return "#2be064";
    if (bmiResult >= 25 && bmiResult < 29.9) return "#e09e2b";
    return "#db261d";
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.calculateBMI();
  };

  render() {
    return (
      <div className="BMIToolHomePageContainer">
        <div className="BMIToolHomePageHeader bold">
          Tính chỉ số BMI - Chỉ số khối cơ thể
        </div>
        <div className="BMIToolHomePageContent">
          <div className="BMIFormContainer">
            <form onSubmit={this.handleSubmit}>
              <div className="BMIFormGender">
                <p className="bold">Giới tính của bạn</p>
                <div className="BMIGenderSelection">
                  <div className="BMIMale flex-center selected">
                    <FaMale />
                    <span className="bold">Nam</span>
                  </div>
                  <div className="BMIFemale flex-center">
                    <FaFemale />
                    <span className="bold">Nữ</span>
                  </div>
                </div>
              </div>
              <div className="BMIFormAge">
                <p className="bold">Bạn bao nhiêu tuổi? (năm)</p>
                <input
                  type="Number"
                  placeholder="Số tuổi"
                  onChange={this.handleAgeChange}
                ></input>
              </div>
              <div className="BMIFormHeight">
                <p className="bold">Bạn cao bao nhiêu? (cm)</p>
                <input
                  type="Number"
                  placeholder="Chiều cao"
                  onChange={this.handleHeightChange}
                ></input>
              </div>
              <div className="BMIFormWeight">
                <p className="bold">Cân nặng của bạn (kg)</p>
                <input
                  type="Number"
                  placeholder="Cân nặng"
                  onChange={this.handleWeightChange}
                ></input>
              </div>
              {this.state.bmiResult !== null && (
                <div className="BMIResultContainer">
                  <p className="bold">
                    Kết quả BMI của bạn:{" "}
                    <span
                      style={{
                        color: this.getBMIColor(this.state.bmiResult),
                        fontWeight: "700",
                      }}
                    >
                      {this.state.bmiResult.toFixed(2)}
                    </span>
                  </p>

                  <p className="bold">
                    Phân loại BMI:{" "}
                    <span
                      style={{
                        color: this.getBMIColor(this.state.bmiResult),
                        fontWeight: "700",
                      }}
                    >
                      {this.getBMICategory()}
                    </span>
                  </p>

                  <p
                    style={{
                      color: this.getBMIColor(this.state.bmiResult),
                      fontWeight: "700",
                    }}
                  >
                    {this.getBMIAdvice()}
                  </p>
                </div>
              )}
              <div className="BMIFormSubmitButton">
                <button type="submit" className="bold">
                  Tính ngay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default BMIToolHomePage;
