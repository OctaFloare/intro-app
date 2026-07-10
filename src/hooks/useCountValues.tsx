import { useState } from "react";

export const useCountValue = () => {
    const [count, setCount] = useState(0);
    
    return { count, setCount };
}