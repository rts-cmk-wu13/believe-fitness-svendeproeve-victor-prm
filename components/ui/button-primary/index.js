"use client"

import Link from "next/link"

export default function ButtonPrimary({ ...props }) {
    const type = props.type || "submit"
    const href = props.href || "#"


    if (type === "link") {
        return (
            <Link
                href={href}
                className={`cust-button disabled:gray-400 disabled:text-black/75 disabled:opacity-66 disabled:cursor-not-allowed ${props.className}`}
                {...(props.disabled && props.disabled)} // Attach disabled if passed as props
            >
                {props.label}
            </Link>
        )
    }

    return (
        <button
            type={type == "submit" ? "submit" : "button"}
            className={`cust-button disabled:gray-400 disabled:text-black/75 disabled:opacity-66 disabled:cursor-not-allowed ${props.className}`}
            {...(props.onClick && props.onClick)} // Attach onClick if passed as props
            {...(props.disabled && props.disabled)} // Attach disabled if passed as props
        >
            {label}
        </button>
    )
} 