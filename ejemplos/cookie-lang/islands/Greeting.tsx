import { useState, useEffect } from "preact/hooks";

const Greeting = () => {
  const [lang, setLang] = useState<string>('en');
  const handleLangChange = (lang: string) => {
    setLang(lang);
    const date = new Date();
    const expires = date.getTime() + 365 * 24 * 60 * 60 * 1000; // 1 year
    document.cookie = `lang=${lang}; path=/; expires=${new Date(expires).toUTCString()}`;
    // Set the cookie with the selected language
  }

  useEffect(()=>{
    const cookies = document.cookie.split('; ');
    const langCookie = cookies.find(row => row.startsWith('lang='));
    if (langCookie) {
      const langValue = langCookie.split('=')[1];
      setLang(langValue);
    }
  }, []);
  return (<div>
    <div>
      <span class="LangSelector" onClick={() => handleLangChange("en")}>English</span><span> | </span>
      <span class="LangSelector" onClick={() => handleLangChange("es")}>Español</span>
    </div>

    {lang === "en" ? <h1>Hello world</h1> : <h1>Hola mundo</h1>}
  </div>)
}

export default Greeting;