import axios from "axios";

const API ="https://5b9f8640f5036f00142e4a2c.mockapi.io/v1/users-count"

export const graph = () => {
  console.log('testt')
  return async (dispatch) => {
    console.log('test222222')
    await axios.get(API).then((res) => {
      dispatch({ type: "Graph", payload: res.data });
      console.log(res, "dataaaaaaaaaa");
    });
  };
};


