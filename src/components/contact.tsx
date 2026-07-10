import { useCountContext } from "../hooks/useCountContext";
import { Navbar } from "./navbar"

export const Contact = () => {
    const { count } = useCountContext()!;

    return <>
        <Navbar />
        <div>This is the contact component</div>
        <div>{count}</div>
    </>
}
