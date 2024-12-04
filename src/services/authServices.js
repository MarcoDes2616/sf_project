const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("token"));
};

const actionLogout = () => {
  localStorage.clear();
  window.location.reload();
};

const authService = {
  getCurrentUser,
  actionLogout
};

export default authService;
