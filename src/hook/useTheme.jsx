import { createContext,useState } from "react";

export const ThemeContexte = createContext();


export function ThemeProvider({children}){

    const [theme,setTheme] = useState(false); 

    const handleTheme = ()=>{
        setTheme(prevTheme => !prevTheme);
    }
    return(
        <>
            <ThemeContexte.Provider value={{theme,handleTheme}}>
                {children}
            </ThemeContexte.Provider>
        </>
    );

}