// const fetchAllSchedule = () => {
//     return instance.get("api/schedules/?limit=1000&offset=0");
// };

// export { fetchAllSchedule };
const { default: instance } = require("utils/axiosCutomize");
const editDoctorInformation = (
  id,
  name,
  phone,
  address,
  years_of_experience,
  birthday,
  gender,
) => {
  return instance.patch(`/api/doctors/${id}/`, {
    name,
    phone,
    address,
    years_of_experience,
    birthday,
    gender,
  });
};
const getBlog = (id, name, id_category) => {
  return instance.get(
    `/api/search_blog/?id_category=${id_category}&name=${name}&id_doctor=${id}`,
  );
};
const addBlog = (id_category, id_doctor, title, content) => {
  return instance.post("/api/blogcruds/", {
    id_category,
    id_doctor,
    title,
    content,
  });
};
const deleteBlog = (id_blog, id_category, id_doctor, title, content) => {
  return instance.delete(`/api/blogcruds/${id_blog}/`, {
    id_category,
    id_doctor,
    title,
    content,
  });
};
const editBlog = (id_blog, id_category, id_doctor, title, content) => {
  return instance.patch(`/api/blogcruds/${id_blog}/`, {
    id_category,
    id_doctor,
    title,
    content,
  });
};
export { editDoctorInformation, getBlog, addBlog, deleteBlog, editBlog };
