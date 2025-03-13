import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  courses: courses,
};
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addcourse: (state, { payload: course }) => {
      const newcourse: any = {
        _id: uuidv4(),
        name: course.name,
        number: "",
        startDate: "",
        endDate: "",
        department: "",
        credits: 4,
        description: course.description,
        imageLoc: ""
      };
      state.courses = [...state.courses, newcourse] as any;
    },
    deletecourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter(
        (m: any) => m._id !== courseId);
    },
    updatecourse: (state, { payload: course }) => {
      state.courses = state.courses.map((m: any) =>
        m._id === course._id ? course : m
      ) as any;
    },
    editcourse: (state, { payload: courseId }) => {
      state.courses = state.courses.map((m: any) =>
        m._id === courseId ? { ...m, editing: true } : m
      ) as any;
    },
  },
});
export const { addcourse, deletecourse, updatecourse, editcourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;