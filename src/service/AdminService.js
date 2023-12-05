const { default: instance } = require("utils/axiosCutomize");
const addHospital = (username, password, email) => {
  return instance.post(`/api/auth/register/doctor/`, {
    username,
    password,
    email,
  });
};
const getAllAcount = () => {
  return instance.get("/api/accounts?limit=100&offset=0");
};
const addCategory = (name, describe, icon) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("describe", describe);
  formData.append("icon", icon);
  return instance.post("/api/categories/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
const editCategory = (id, name, describe, icon) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("describe", describe);
  formData.append("icon", icon);
  return instance.patch(`/api/categories/${id}/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
const deleteCategory = (id) => {
  return instance.delete(`/api/categories/${id}`);
};
export { addHospital, getAllAcount, addCategory, editCategory, deleteCategory };
