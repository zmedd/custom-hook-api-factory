const BASE_URL = "https://backend-curs.herokuapp.com";

const ENDPOINTS = {
  LOGIN: "/users/login",
  REGISTER: "/users/register",
};

export const api = {
  login: async (credentials) => {
    const request = await fetch(BASE_URL + ENDPOINTS.LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const response = await request.json();

    return response;
  },
  register: async (userData) => {
    const request = await fetch(BASE_URL + ENDPOINTS.REGISTER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const response = await request.json();

    return response;
  },
};
