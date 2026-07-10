import { createContext } from "react";

export const CountContext = createContext<{
    count: number;
    setCount: (count: number) => void | ((count: (prevCount: number) => number) => void);
} | null>(null);