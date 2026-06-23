import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/users";

export const getStudents = () => {
  return axios.get(API);
};

export const deleteStudent = (id) => {
  return axios.delete(`${API}/${id}`);
};

export const createStudent = (studentData) => {
  return axios.post(API, studentData);
};
