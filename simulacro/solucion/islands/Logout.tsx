const Logout = () => {
  const onLogOut = () => {
    // remove cookie
    document.cookie = "auth=;Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    // redirect to login
    window.location.href = "/login";
  };

  return <a onClick={onLogOut} className="logout-button">Logout</a>;
};

export default Logout;
