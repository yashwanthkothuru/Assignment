import axios from "axios";

export const graph = () => {
  return async (dispatch) => {
    await axios.get("https://5b9f8640f5036f00142e4a2c.mockapi.io/v1/users-count").then((res) => {
      dispatch({ type: "Graph", payload: res.data });
      console.log(res, "dataaaaaaaaaa");
    });
  };
};


