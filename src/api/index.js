import axios from "axios";

const baseURL = "http://localhost:4000/";

export const createUser = async (userName, password, image_url) => {
  try {
    const res = await axios.post(`${baseURL}api/users/signup`, {
      userName: userName,
      password: password,
      image_url: image_url,
    });
    return res;
  } catch (e) {
    return null;
  }
};

export const login = async (username, password) => {
  try {
    const res = await axios.get(`${baseURL}api/users/login`, {
      headers: {
        username: username,
        password: password,
      },
    });
    return res;
  } catch (e) {
    return null;
  }
};

export const saveMovie = async (data) => {
  try {
    const res = axios.post(`${baseURL}api/movies/save`, { ...data });
    return (await res).data.movie;
  } catch (e) {
    return null;
  }
};

export const getAllMovie = async (data) => {
  try {
    const res = axios.get(`${baseURL}api/movies/getAll`);
    return res;
  } catch (e) {
    return null;
  }
};
