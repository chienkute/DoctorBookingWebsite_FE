import React from "react";
import './BMIToolHomePage.scss'

import {FaMale, FaFemale} from 'react-icons/fa';

class BMIToolHomePage extends React.Component{
    render(){
        return(
            <div className="BMIToolHomePageContainer">
                <div className="BMIToolHomePageHeader bold">
                    Tính chỉ số BMI - Chỉ số khối cơ thể
                </div>
                <div className="BMIToolHomePageContent">
                    <div className="BMIFormContainer">
                        <form action="#">
                            <div className="BMIFormGender">
                                <p className="bold">Giới tính của bạn</p>
                                <div className="BMIGenderSelection flex-center">
                                    <div className="BMIMale flex-center selected">
                                        <FaMale/>
                                        <span className="bold">Nam</span>
                                    </div>
                                    <div className="BMIFemale flex-center">
                                        <FaFemale/>
                                        <span className="bold">Nữ</span>
                                    </div>
                                </div>
                            </div>
                            <div className="BMIFormAge">
                                <p className="bold">Bạn bao nhiêu tuổi? (năm)</p>
                                <input type="Number" placeholder="Số tuổi"></input>
                            </div>
                            <div className="BMIFormHeight">
                                <p className="bold">Bạn cao bao nhiêu? (cm)</p>
                                <input type="Number" placeholder="Chiều cao"></input>
                            </div>
                            <div className="BMIFormWeight">
                                <p className="bold">Cân nặng của bạn (kg)</p>
                                <input type="Number" placeholder="Cân nặng"></input>
                            </div>
                            <div className="BMIFormSubmitButton">
                                <button type="submit" className="bold">Tính ngay</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default BMIToolHomePage