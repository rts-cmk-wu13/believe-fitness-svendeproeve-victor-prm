import { LuMenu } from "react-icons/lu";

export default function ButtonMenu({ ...props }) {
    return (
        <button className={`size-fit drop-shadow-lg drop-shadow-fit-00/25  p-2 ${props.className || ""}`}>
            <LuMenu />
        </button>
    )
}