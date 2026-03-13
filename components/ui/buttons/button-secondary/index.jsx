"use client"
import Link from "next/link"

export default function ButtonSecondary({ onClick, disabled, popoverTarget, ...props }) {
    const type = props.type || "submit"
    const href = props.href || "#"
    const labelIsText = typeof props.label === "string";
    const icon = props.icon || null;

    if (type === "link") {
        return (
            <Link
                href={href}
                className={`cust-button-sec  ${props.className || ""}`}
                {...(props.disabled && props.disabled)} // Attach disabled if passed as props
            >
                <>
                    {props.label && <strong className={`duration-300 font-semibold ${labelIsText} ? "inline-flex" : ""`}>{props.label}</strong>}
                    {icon && <span className="inline *:inline *:size-5">{icon}</span>}
                </>
            </Link>
        )
    }

    return (
        <button
            type={type == "submit" ? "submit" : "button"}
            className={`cust-button-sec  ${props.className || ""}`}
            {...(onClick && { onClick })} // Attach onClick if passed as props
            {...(disabled && { disabled })} // Attach disabled if passed as props
            {...(popoverTarget && { popoverTarget })} // Attach popovertarger if passed as props
            {...(disabled && { title: "This action is not possible" })}
        >
            <>
                {props.label && <strong className={`duration-300 font-semibold ${labelIsText} ? "inline-flex" : ""`}>{props.label}</strong>}
                {icon && <span className="inline *:inline *:size-5">{icon}</span>}
            </>
        </button>
    )
} 