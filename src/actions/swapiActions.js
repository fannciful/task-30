import axios from "axios";

export const fetchSwapiData = () => async (dispatch) => {
  dispatch({ type: "FETCH_SWAPI_REQUEST" });
  try {
    const response = await axios.get("https://swapi.py4e.com/api/people/1/");
    dispatch({ type: "FETCH_SWAPI_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_SWAPI_FAILURE", error: error.message });
  }
};

export const clearSwapiData = () => ({ type: "CLEAR_SWAPI_DATA" });
