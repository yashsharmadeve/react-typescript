import React,{createContext, useState} from "react";

interface CounterProviderProps{
    children: React.ReactNode
}

interface CounterContext {
    value: number;
    setcount: (num:number) => void
}

const counterContext = createContext<CounterContext | null>(null);

export const CounterProvider:React.FC<CounterProviderProps> = (props) => {

    const [count, setcount] = useState<number>();

    return (
        <counterContext.Provider value={{
            value: count,
            setcount,
        }}>
            {props.children}
        </counterContext.Provider>
    )
}