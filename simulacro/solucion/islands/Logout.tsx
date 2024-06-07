const Logout = () => {
  const onLogOut = () => {
    // remove cookie
    const domain = window.location.hostname;
    document.cookie = `auth=;Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=${domain}; SameSite=Lax; Secure`;

    // redirect to login
    window.location.href = "/login";
  };

  return (
    <a onClick={onLogOut} className="logout-button">
      Logout
    </a>
  );
};

export default Logout;
