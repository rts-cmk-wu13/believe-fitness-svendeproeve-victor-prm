export default function ButtonMenu({onClick, ...props }) {
    

    return (
        <button
            className={`size-fit cursor-pointer drop-shadow-lg drop-shadow-fit-00/25 text-2xl p-2 ${props.className || ""}`}
            {...(onClick && { onClick })} // Attach onClick if passed as props
        >
            {props.children}
        </button>
    )
}