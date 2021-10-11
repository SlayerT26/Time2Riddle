import api from "./config";

export const getAllAnswers = async () => {
  const resp = await api.get("/riddles");
  return resp.data;
};

export const postAnswer = async (riddleID, answerData) => {
  const resp = await api.post(`/riddles/${riddleID}/answers`, {
    answer: { guess: answerData },
  });
  return resp.data;
};
