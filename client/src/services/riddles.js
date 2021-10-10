import api from "./config";

export const getAllRiddles = async () => {
  const resp = await api.get("/riddles");
  return resp.data;
};

export const getOneRiddle = async (id) => {
  const resp = await api.get(`/riddles/${id}`);
  return resp.data;
};

export const postRiddle = async (riddleData) => {
  const resp = await api.post("/riddles", { riddle: riddleData });
  return resp.data;
};

export const deleteRiddle = async (id) => {
  const resp = await api.delete(`/riddles/${id}`);
  return resp;
};

export const putRiddle = async (id, riddleData) => {
  const resp = await api.put(`/riddles/${id}`, { riddle: riddleData });
  return resp.data;
};

// export const addFlavorToFood = async (flavorId, id) => {
//   const resp = await api.put(`/flavors/${flavorId}/foods/${id}`);
//   return resp.data;
// };
