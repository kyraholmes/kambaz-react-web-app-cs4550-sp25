import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "./Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  enrollments: enrollments,
};
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnrollment: (state, { payload: enrollment }) => {
      const newEnrollment: any = {
        _id: uuidv4(),
        user: enrollment.user,
        course: enrollment.course
      };

      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    deleteEnrollment: (state, { payload: enrollment }) => {
      state.enrollments = state.enrollments.filter(
        (m: any) => m.user !== enrollment.user 
          && m.course !== enrollment.course
        );
    },
    updateEnrollment: (state, { payload: enrollment }) => {
      state.enrollments = state.enrollments.map((m: any) =>
        m._id === enrollment._id ? enrollment : m
      ) as any;
    },
    editEnrollment: (state, { payload: enrollmentId }) => {
      state.enrollments = state.enrollments.map((m: any) =>
        m._id === enrollmentId ? { ...m, editing: true } : m
      ) as any;
    },
  },
});
export const { addEnrollment, deleteEnrollment, updateEnrollment, editEnrollment } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;