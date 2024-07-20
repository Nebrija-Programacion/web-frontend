export const setCookie = (name: string, value: string, days: number) => {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
};

export const getCookie = (name: string) => {
  const cookie = document.cookie.split(";").find((cookie) =>
    cookie.includes(name)
  );
  return cookie ? cookie.split("=")[1] : "";
};
