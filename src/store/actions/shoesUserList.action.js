import { API_URL } from "../../constants/Database";

export const GET_SHOES = "GET_SHOES";

export const getShoes = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/orders.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      
      const orders = Object.keys(result).map((key) => ({
        ...result[key],
        id: key,
      }));
      dispatch({
        type: GET_SHOES,
        payload: orders,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
