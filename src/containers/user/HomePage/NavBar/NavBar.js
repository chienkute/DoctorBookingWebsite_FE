import React from "react";
import './NavBar.scss';
import {FaFileLines, FaHeartPulse, FaNewspaper} from 'react-icons/fa6';
import {GrSchedules} from 'react-icons/gr';

class NavBar extends React.Component{
    render(){
        return(
            <div className="NavigationContainer">
                <ul className="NavigationList clear flex-center">
                    <li className="Navigation bold">
                        <a href="#" className="flex-center clear">
                            <div className="NavigationIcon flex-center">
                             <FaFileLines/>
                                </div>
                            <div className="NavigationName">Chuyên mục</div>
                        </a>
                    </li>
                    <li className="Navigation bold">
                        <a href="#" className="flex-center clear">
                            <div className="NavigationIcon flex-center">
                                <GrSchedules/>
                            </div>
                            <div className="NavigationName">Đặt lịch hẹn</div>
                        </a>
                    </li>
                    <li className="Navigation bold">
                        <a href="#" className="flex-center clear">
                            <div className="NavigationIcon flex-center">
                                <FaHeartPulse/>
                            </div>
                            <div className="NavigationName">Kiểm tra sức khoẻ</div>
                        </a>
                    </li>
                    <li className="Navigation bold">
                        <a href="#" className="flex-center clear">
                            <div className="NavigationIcon flex-center">
                                <FaNewspaper/>
                            </div>
                            <div className="NavigationName">Tin tức</div>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavBar;