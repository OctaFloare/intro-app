import { useContext } from "react";
import { CountContext } from "../components/countContext";

export const useCountContext = () => useContext(CountContext)