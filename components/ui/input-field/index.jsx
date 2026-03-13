"use client"

import { LuCircleX } from "react-icons/lu";
import { capitalizeFirstLetter } from "@/lib/utils";

export default function InputField({ type, name, label, onChange, ...props }) {
    //Guard Clauses
    if (!name) throw new Error("Missing name in input field")
    if (!type) throw new Error("Missing type in input field")

    const ErrorMessage = ({ msg, abs = true }) => {
        return (
            <strong className={`
                ${abs && "absolute -bottom-2 right-3"}  
                px-2 py-0.5 rounded-xl text-fit-ff 
                border border-red-500 font-semibold 
                bg-red-700/50 backdrop-blur-xs font-inter
                text-sm inline-flex gap-1 items-center`}
            >
                <LuCircleX className="fill-red-500" />
                {msg}
            </strong>
        )
    }

    return (
        <>
            {
                /* Check if text area or regular input field */
                type !== "textarea" ?
                    (
                        /*  Regular input field */
                        <label className="relative w-full" htmlFor={name}>
                            <span className="sr-only">{label}</span>
                            <input
                                className={`cust-input ${props.className || ""}`}
                                name={name}
                                id={name}
                                type={type}
                                placeholder={capitalizeFirstLetter(props.placeholder) || capitalizeFirstLetter(label)}
                                value={props.value}
                                defaultValue={props.defaultValue}
                                {...(onChange && { onChange })} // Attach onChange if passed as props  
                            />
                            {props.errors && <ErrorMessage msg={props.errors[0]} />}
                        </label>

                    )
                    :
                    (
                        /*  Text area */
                        <label className="relative w-full" htmlFor={name}>
                            <span className="sr-only">{label}</span>
                            <textarea
                                className={`cust-input block h-60 ${props.className || ""}`}
                                name={name}
                                id={name}
                                placeholder={capitalizeFirstLetter(props.placeholder) || capitalizeFirstLetter(label)}
                                value={props.value}
                                defaultValue={props.defaultValue}
                                {...(onChange && { onChange })} // Attach onChange if passed as props  
                            ></textarea>
                            {props.errors && <ErrorMessage msg={props.errors[0]} />}
                        </label>
                    )
            }
        </>
    )
}