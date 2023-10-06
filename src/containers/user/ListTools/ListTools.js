import React from "react";
import './ListTools.scss';

class ListTools extends React.Component{
    render(){
        return(
            <div className="ListToolsContainer">
                <div className="ListToolsHeader bold">
                    Các công cụ kiểm tra sức khoẻ
                </div>
                <div className="ListToolsContent">
                    <ul className="ListToolsRow clear flex-center">
                        <li className="Tools col-3">
                            <a href="#" className="clear">
                                <img src="https://cdn.hellobacsi.com/wp-content/uploads/2017/10/BMR_new.png" alt="Tools Icon"></img>
                                <div>Đo nhu cầu calo (BMR)</div>
                            </a>
                        </li>
                        <li className="Tools col-3">
                            <a href="#" className="clear">
                                <img src="https://cdn.hellobacsi.com/wp-content/uploads/2022/10/bieu-do-tang-truong-cua-tre-em_featured-image.png" alt="Tools Icon"></img>
                                <div>Biểu đồ tăng trưởng của trẻ em</div>
                            </a>
                        </li>
                        <li className="Tools col-3">
                            <a href="#" className="clear">
                                <img src="https://cdn.hellobacsi.com/wp-content/uploads/2019/07/Target-heart-rate.png" alt="Tools Icon"></img>
                                <div>Công cụ tính nhịp tim lí tưởng</div>
                            </a>
                        </li>
                    </ul>
                    <ul className="ListToolsRow clear flex-center">
                        <li className="Tools col-3">
                            <a href="#" className="clear">
                                <img src="https://cdn.hellobacsi.com/wp-content/uploads/2017/10/Ovulation.png" alt="Tools Icon"></img>
                                <div>Tính ngày rụng trứng</div>
                            </a>
                        </li>
                        <li className="Tools col-3">
                            <a href="#" className="clear">
                                <img src="https://cdn.hellobacsi.com/wp-content/uploads/2022/01/Icon_Liver_cancer_201x201.png" alt="Tools Icon"></img>
                                <div>Sàng lọc tầm soát ung thư gan</div>
                            </a>
                        </li>
                        <li className="Tools col-3">
                            <a href="#" className="clear">
                                <img src="https://cdn.hellobacsi.com/wp-content/uploads/2021/11/icon_cardiovascular.png" alt="Tools Icon"></img>
                                <div>Sàng lọc tầm soát bệnh tim mạch</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="ListToolsExpand flex-center">
                    <a href="#" className="clear bold">Xem tất cả</a>
                </div>
            </div>
        );
    }
}

export default ListTools