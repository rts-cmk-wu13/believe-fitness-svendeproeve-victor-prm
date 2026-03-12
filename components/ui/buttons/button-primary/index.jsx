"use client"
import Link from "next/link"

export default function ButtonPrimary({ onClick, disabled, ...props }) {
    const type = props.type || "submit"
    const href = props.href || "#"
    const labelIsText = typeof props.label === "string";
    const icon = props.icon || null;

    if (type === "link") {
        return (
            <Link
                href={href}
                className={`cust-button disabled:gray-400 disabled:cursor-not-allowed disabled:bg-fit-9e/80 disabled:text-fit-6f  ${props.className}`}
                {...(props.disabled && props.disabled)} // Attach disabled if passed as props
            >
                <>
                    {props.label && <span className={labelIsText ? "inline-block" : ""}>{props.label}</span>}
                    {icon && <span className="inline *:inline *:size-5">{icon}</span>}
                </>
            </Link>
        )
    }

    return (
        <button
            type={type == "submit" ? "submit" : "button"}
            className={`cust-button disabled:gray-400 disabled:cursor-not-allowed disabled:bg-fit-9e/80 disabled:text-fit-6f  ${props.className}`}
            {...(onClick && { onClick })} // Attach onClick if passed as props
            {...(disabled && { disabled })} // Attach disabled if passed as props
            {...(disabled && { title: "You must be logged in to perfom this action" })}
        >
            <>
                {props.label && <span className={labelIsText ? "inline-block" : ""}>{props.label}</span>}
                {icon && <span className="inline *:inline *:size-5">{icon}</span>}
            </>
        </button>
    )
} 