import { createContext, useState } from "react";

export const LangContext = createContext(null);

export const LangContextProvider = (props) => {
  const [lang, setLang] = useState("");
  const [mail, setMail] = useState("");
  return (
    <LangContext.Provider value={{ lang, setLang, mail, setMail }}>
      {props.children}
    </LangContext.Provider>
  );
};
