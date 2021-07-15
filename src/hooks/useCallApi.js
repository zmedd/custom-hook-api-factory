import { useState, useEffect } from "react";

export const useCallApi = (url) => {
  const [state, setState] = useState({
    loading: true,
    data: {},
    error: undefined,
  });

  const getApiData = async () => {
    const request = await fetch(url);
    const response = await request.json();

    if (request.status === 200) {
      setState((prevState) => ({
        ...prevState,
        loading: false,
        data: response,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        loading: false,
        error: "Something went wrong.",
      }));
    }
  };

  useEffect(() => {
    state.loading && getApiData();
  }, [getApiData, state.loading]);

  return state;
};
