"use client"
import Link from "next/link"

export default function ButtonPrimary({ onClick, ...props }) {
    const type = props.type || "submit"
    const href = props.href || "#"
    const labelIsText = typeof props.label === "string";
    const icon = props.icon || null;


    if (type === "link") {
        return (
            <Link
                href={href}
                className={`cust-button disabled:gray-400 disabled:text-black/75 disabled:opacity-66 disabled:cursor-not-allowed ${props.className}`}
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
            className={`cust-button disabled:gray-400 disabled:text-black/75 disabled:opacity-66 disabled:cursor-not-allowed ${props.className}`}
            {...(onClick && { onClick })} // Attach onClick if passed as props
            {...(props.disabled && props.disabled)} // Attach disabled if passed as props
        >
            <>
                {props.label && <span className={labelIsText ? "inline-block" : ""}>{props.label}</span>}
                {icon && <span className="inline *:inline *:size-5">{icon}</span>}
            </>
        </button>
    )
} 