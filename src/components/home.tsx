import { useCountContext } from "../hooks/useCountContext";
import { Navbar } from "./navbar"

export const Home = () => {
    const { count: contextCount, setCount } = useCountContext()!;

    return <>
        <Navbar />
        <div>This is the home component</div>
        <button onClick={() => setCount((count: number) => count + 1)}>Increase counter</button>
        <div>{contextCount}</div>
    </>
}
