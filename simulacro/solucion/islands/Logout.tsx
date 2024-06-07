const Logout = () => {
  const onLogOut = () => {
    // remove cookie
    document.cookie = "";
    // redirect to login
    window.location.href = "/login";
  };

  return <a onClick={onLogOut} className="logout-button">Logout</a>;
};

export default Logout;
