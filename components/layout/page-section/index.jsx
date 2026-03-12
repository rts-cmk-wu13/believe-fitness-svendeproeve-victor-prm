export default function PageSection({ ...props }) {
    return (
        <section className={`
            flex flex-col gap-4 text-fit-00 w-full container px-5 rounded-4xl mx-auto animate-fade-in last-of-type:mb-20 
            ${props.className || ""}
            `
            }>
            {props.title && <h2 className={`font-poppins text-2xl font-semibold`}>
                {props.title}
            </h2>}
            {props.children}
        </section>
    )
}