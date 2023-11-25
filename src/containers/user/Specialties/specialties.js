import { memo, useContext, useEffect, useState } from "react";
import "../../user/Specialties/specialties.scss";
import specialtiesImage from "../../../assets/chuyenkhoa/dakhoa.png";
import { fetchAllSpecialties } from "service/UserService";
import { LoadingContext } from "context/LoadingContext";
const Specialties = () => {
  const [specialty, setSpecialty] = useState([]);
  const { loading, setLoading } = useContext(LoadingContext);
  useEffect(() => {
    getSpecialty();
  }, []);
  const getSpecialty = async () => {
    let res = await fetchAllSpecialties();
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
                  <a
                    className="col-md-2"
                    href="/care/searchDoctor"
                    key={`specilaties-${index}`}
                  >
                    <div>
                      <img src={specialtiesImage} alt="" />
                    </div>
                    <p>{item.name}</p>
                  </a>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};
export default memo(Specialties);
