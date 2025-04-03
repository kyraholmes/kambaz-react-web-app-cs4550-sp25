import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;


// creates a new course & enrolls the current user in it
export const createCourse = async (course:any) => {
  const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
  return data;
}

// sends goes to users dao, which calls courses dao and gives it the current user's id
export const findMyCourses = async () => {
  const {data} = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
  return data;
}

// sends goes to users dao, which calls courses dao and gives it the current user's id
export const findMyUnCourses = async () => {
  const {data} = await axiosWithCredentials.get(`${USERS_API}/current/uncourses`);
  return data;
}

export const enrollInCourse = async (courseId: any) => {
  const {data} = await axiosWithCredentials.post(`${USERS_API}/current/courses/enroll`, courseId);
  return data;
}

export const unenrollFromCourse = async (courseId: any) => {
  const {data} = await axiosWithCredentials.delete(`${USERS_API}/current/courses/unenroll`, courseId);
  return data;
}

export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post( `${USERS_API}/signin`, credentials );
  return response.data;
};

export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const profile = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  return response.data;
};

export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};



