import React from "react";
import "./BMIToolHomePage.scss";
import CustomChart from "./SegmentBar";

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
      return " Bạn có thể cần tăng cường chế độ ăn uống để đảm bảo cung cấp đủ năng lượng và dinh dưỡng cho cơ thể. Tham khảo ý kiến của bác sĩ hoặc chuyên gia dinh dưỡng để xây dựng một kế hoạch ăn uống lành mạnh và hiệu quả.";
    if (bmiResult >= 18.5 && bmiResult < 22.9)
      return "Bạn có một trạng thái cân nặng khá lành mạnh. Hãy tiếp tục duy trì lối sống lành mạnh bằng cách duy trì chế độ ăn cân đối và luyện tập thể dục đều đặn.";
    if (bmiResult >= 23 && bmiResult < 24.9)
      return " Cần chú ý đến chế độ ăn uống và tăng cường hoạt động thể chất. Giảm cân nhẹ có thể mang lại nhiều lợi ích cho sức khỏe, bao gồm giảm nguy cơ mắc các bệnh liên quan đến thừa cân.";
    if (bmiResult >= 25 && bmiResult < 29.9)
      return "Cần thay đổi lối sống bằng cách giảm cân thông qua việc điều chỉnh chế độ ăn uống và tăng cường hoạt động vận động. Đề xuất thảo luận với chuyên gia về kế hoạch giảm cân an toàn và hiệu quả.";
    return "Việc giảm cân trở nên quan trọng hơn để ngăn chặn tình trạng béo phì. Hãy tìm kiếm sự hỗ trợ từ chuyên gia dinh dưỡng và bác sĩ để xây dựng kế hoạch giảm cân và duy trì lối sống lành mạnh.";
  };

  getBMIColor = () => {
    const { bmiResult } = this.state;
    if (bmiResult < 18.5) return "#89b5da";
    if (bmiResult >= 18.5 && bmiResult < 22.9) return "#7fc89b";
    if (bmiResult >= 23 && bmiResult < 24.9) return "#f0c702";
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
                <>
                  <div className="BMIChart">
                    <CustomChart
                      showSeparatorValue
                      borderRadius={3}
                      values={[0, 18.5, 23.0, 25.0, 30.0, 40.0]}
                      colors={[
                        "#89b5da",
                        "#7fc89b",
                        "#ffd401",
                        "#f19451",
                        "#e75055",
                      ]}
                      position={this.state.bmiResult}
                    />
                  </div>
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
                </>
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
