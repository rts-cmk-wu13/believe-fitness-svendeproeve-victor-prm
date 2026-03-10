export default function ButtonMenu({ ...props }) {
    return (
        <button className={`size-fit drop-shadow-lg drop-shadow-fit-00/25 text-2xl  p-2 ${props.className || ""}`}>
            {props.children}
        </button>
    )
}