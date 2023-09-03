import React,{useContext,useState,useEffect} from "react";
import axios   from "axios";

const AppContext=React.createContext();

const AppProvider=({children})=>{
    return<AppContext.Provider value={{}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export{AppProvider,AppContext}