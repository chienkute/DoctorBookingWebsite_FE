import { memo, useEffect, useState } from "react";
import "../../user/Specialties/specialties.scss";
import specialtiesImage from "../../../assets/chuyenkhoa/dakhoa.png";
import { fetchAllSpecialties } from "service/UserService";
const Specialties = () => {
  const [specialty, setSpecialty] = useState([]);
  // const [selectedDoctor, setSelectedDoctor] = useState([]);
  useEffect(() => {
    getSpecialty();
  }, []);
  const getSpecialty = async () => {
    let res = await fetchAllSpecialties();
    setSpecialty(res.results);
  };
  // const handleDoctorClick = async (id) => {
  //   let data = await getSpecialtiesById(id);
  //   setSelectedDoctor(data);
  // };
  return (
    <div className="specialties">
      <h1>Tất cả Chuyên khoa trên Tìm bệnh viện</h1>
      <div class="specialties__list">
        <div className="row">
          {specialty &&
            specialty.map((item, index) => {
              return (
                <a className="col-md-2" href="#" key={`specilaties-${index}`}>
                  <div>
                    <img src={specialtiesImage} alt="" />
                  </div>
                  <p>{item.name}</p>
                </a>
              );
            })}
        </div>
      </div>
      {/* onClick={() => handleDoctorClick(doctor.id)} */}
    </div>
  );
};
export default memo(Specialties);
