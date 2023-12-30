import React from "react";
import "./BMIToolHomePage.scss";

import { FaMale, FaFemale } from "react-icons/fa";

class BMIToolHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      weight: 0,
      bmiResult: null,
    };
  }

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
    if (bmiResult >= 18.5 && bmiResult < 22.9) return "Bình thường";
    if (bmiResult >= 23 && bmiResult < 24.9) return "Thừa cân";
    if (bmiResult >= 25 && bmiResult < 29.9) return "Béo phì độ I";
    return "Béo phì độ II";
  };

  getBMIAdvice = () => {
    const { bmiResult } = this.state;
    if (bmiResult < 18.5)
      return "Bạn cần tăng cường dinh dưỡng để đạt trọng lượng lý tưởng.";
    if (bmiResult >= 18.5 && bmiResult < 22.9)
      return "Bạn đang ở trong mức trọng lượng lý tưởng, hãy duy trì chế độ dinh dưỡng và vận động thường xuyên.";
    if (bmiResult >= 23 && bmiResult < 24.9)
      return "Bạn cần giảm cân để duy trì sức khỏe tốt.";
    if (bmiResult >= 25 && bmiResult < 29.9)
      return "Bạn cần có chế độ dinh dưỡng và lối sống lành mạnh.";
    return "Bạn cần có chế độ ăn kiêng để có thể duy trì sức khoẻ.";
  };

  getBMIColor = () => {
    const { bmiResult } = this.state;
    if (bmiResult < 18.5) return "#89b5da";
    if (bmiResult >= 18.5 && bmiResult < 22.9) return "#7fc89b";
    if (bmiResult >= 23 && bmiResult < 24.9) return "#ffd401";
    if (bmiResult >= 25 && bmiResult < 29.9) return "#f19451";
    return "#e75055";
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
