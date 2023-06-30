
'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type ISlides = {
    id: string;
    icon: string;
    title: string;
    description: string;
    link: string;
}

interface ContextProps {
    data: ISlides[],
    setData: Dispatch<SetStateAction<ISlides[]>>
}

const GlobalContext = createContext<ContextProps>({
    data: [],
    setData: (): ISlides[] => [] 
})

export const GlobalContextProvider = ({ children }) => {
    const [userId, setUserId] = useState('');
    const [data, setData] = useState<[] | ISlides[]>([]);
    
    return (
        <GlobalContext.Provider value={{ data, setData }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);