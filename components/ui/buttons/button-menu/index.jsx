export default function ButtonMenu({ onClick, ...props }) {
    const type = props.type || "button"
    const href = props.href || "#"


    if (type === "link") {
        return (
            <Link
                href={href}
                className={`size-fit cursor-pointer drop-shadow-md drop-shadow-fit-00/25 text-2xl p-2 ${props.className || ""}`}
                {...(props.disabled && props.disabled)} // Attach disabled if passed as props
            >
                {props.children}
            </Link>
        )
    }

    return (
        <button
            type={type == "submit" ? "submit" : "button"}
            className={`size-fit cursor-pointer drop-shadow-md drop-shadow-fit-00/25 text-2xl p-2 ${props.className || ""}`}
            {...(onClick && { onClick })} // Attach onClick if passed as props
            {...(props.disabled && props.disabled)} // Attach disabled if passed as props
        >
            {props.children}
        </button>
    )
} 