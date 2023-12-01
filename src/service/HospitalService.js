const { default: instance } = require("utils/axiosCutomize");
const editHospital = (id, name, email, address, info) => {
  return instance.patch(`/api/hospitals/${id}/`, {
    name,
    email,
    address,
    info,
  });
};

export { editHospital };
