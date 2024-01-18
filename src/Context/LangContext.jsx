import { createContext, useState } from "react";


export const LangContext = createContext(null);

export const LangContextProvider = (props) => {
    const [lang,setLang]=useState("");
    return(
<LangContext.Provider value={{lang,setLang}}>
    {
        props.children
    }
</LangContext.Provider>
    );
}