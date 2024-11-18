const getCurrentUser = () => {
  return localStorage.getItem("token");
};

const actionLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("roleId");
  window.location.reload();
};

const authService = {
  getCurrentUser,
  actionLogout
};

export default authService;
