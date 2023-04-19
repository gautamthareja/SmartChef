import api from "./api";

const AuthService = {
  async login(email, password) {
    const response = await api.post("/auth/login", { email, password });
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      return response.data;
    }
    return null;
  },

  async register(email, password) {
    const response = await api.post("/auth/register", { email, password });
    if (response.status === 201) {
      localStorage.setItem("token", response.data.token);
      return response.data;
    }
    return null;
  },
};

export default AuthService;
