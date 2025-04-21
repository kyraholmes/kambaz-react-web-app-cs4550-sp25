import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;
const QUESTIONS_API = `${REMOTE_SERVER}/api/questions`

export const deleteQuiz = async (quizId: string) => {
  const response = await axios.delete(`${QUIZZES_API}/${quizId}`);
  return response.data;
}

export const updateQuiz = async (quiz: any) => {
  const response = await axios.put(`${QUIZZES_API}/${quiz._id}`, quiz);
  return response.data;
}

export const findQuizById = async (quizId: string) => {
  const response = await axios.get(`${QUIZZES_API}/${quizId}`);
  return response.data;
}

export const findQuestionsForQuiz = async (quizId:string) => {
  const response = await axios.get(`${QUIZZES_API}/${quizId}/questions`);
  return response.data;
}

export const deleteQuestion = async (questionId: string) => {
  const response = await axios.delete(`${QUESTIONS_API}/${questionId}`);
  return response.data;
}

export const updateQuestion = async (question: any) => {
  const response = await axios.put(`${QUESTIONS_API}/${question._id}`, question);
  return response.data;
}

export const findQuestionById = async (questionId: string) => {
  const response = await axios.get(`${QUESTIONS_API}/${questionId}`);
  return response.data;
}

export const addQuestionToQuiz = async (question:any, quizId: any) => {
  const response = await axios.post(`${QUIZZES_API}/${quizId}/questions`);
  return response.data;
}
