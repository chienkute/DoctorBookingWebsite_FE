import { memo, useEffect, useState } from "react";
import "../../user/Specialties/specialties.scss";
import specialtiesImage from "../../../assets/chuyenkhoa/dakhoa.png";
import { fetchAllSpecialties } from "service/UserService";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateServiceID, updateServiceName } from "redux/userSlice";
const Specialties = () => {
  const [specialty, setSpecialty] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    getSpecialty();
  }, []);
  const getSpecialty = async () => {
    let res = await fetchAllSpecialties(100, 0);
    if (res) {
      setLoading(false);
      setSpecialty(res.results);
    }
  };
  return (
    <div className="specialties">
      <h1>Tất cả Chuyên khoa trên Tìm bệnh viện</h1>
      {loading ? (
        <div className="lds lds-special">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div class="specialties__list">
          <div className="row">
            {specialty &&
              specialty.map((item, index) => {
                return (
                  <Link
                    className="col-md-2"
                    to={`/care/search`}
                    onClick={() => {
                      const updateName = {
                        serviceName: `${item?.name}`,
                      };
                      const updateId = {
                        serviceId: `${item?.id}`,
                      };
                      dispatch(updateServiceName(updateName));
                      dispatch(updateServiceID(updateId));
                    }}
                  >
                    <div>
                      <img src={item?.icon || specialtiesImage} alt="" />
                    </div>
                    <p>{item?.name}</p>
                  </Link>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};
export default memo(Specialties);
