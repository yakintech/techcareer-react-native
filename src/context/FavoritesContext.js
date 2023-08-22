import { createContext, useState } from "react";


export const FavoritesContext = createContext(null);


export const FavoritesProvider = ({children}) => {

    //global state tanımlıyorum
    const [favorites, setfavorites] = useState([]);

    
    return <FavoritesContext.Provider value={{favorites, setfavorites}}>{children}</FavoritesContext.Provider>

}