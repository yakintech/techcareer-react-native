import { createContext, useState } from "react";

export const CounterContext = createContext(null);


export const CounterProvider = ({children}) => {

    //Global state tanımlıyorum.
    const [counter, setcounter] = useState(0);

    
    const values = {
        counter,
        setcounter
    }

    return <CounterContext.Provider value={values}>{children}</CounterContext.Provider>

}