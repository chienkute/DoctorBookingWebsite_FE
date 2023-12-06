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
const addSepcialties = (name, describe, icon) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("describe", describe);
  formData.append("icon", icon);
  return instance.post("/api/specialties/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
const addService = (name, descripe, icon) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("descripe", descripe);
  formData.append("icon", icon);
  return instance.post("/api/services/", formData, {
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
const editSpecialty = (id, name, describe, icon) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("describe", describe);
  formData.append("icon", icon);
  return instance.patch(`/api/specialties/${id}/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
const editService = (id, name, descripe, icon) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("descripe", descripe);
  formData.append("icon", icon);
  return instance.patch(`/api/services/${id}/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
const deleteCategory = (id) => {
  return instance.delete(`/api/categories/${id}`);
};
const deleteSpecialty = (id) => {
  return instance.delete(`/api/specialties/${id}/`);
};
const deleteService = (id) => {
  return instance.delete(`/api/services/${id}/`);
};
const fetchAllServices = (offset) => {
  return instance.get(`/api/services/?limit=6&offset=${offset}`);
};
const fetchAllSpecialtiess = (offset) => {
  return instance.get(`/api/specialties/?limit=6&offset=${offset}`);
};
const fetchAllCategoriess = (offset) => {
  return instance.get(`/api/categories/?limit=6&offset=${offset}`);
};
export {
  addHospital,
  getAllAcount,
  addCategory,
  editCategory,
  deleteCategory,
  addSepcialties,
  editSpecialty,
  deleteSpecialty,
  addService,
  editService,
  deleteService,
  fetchAllServices,
  fetchAllSpecialtiess,
  fetchAllCategoriess,
};
