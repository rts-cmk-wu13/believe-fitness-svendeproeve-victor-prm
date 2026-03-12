export default function LandingSection({ ...props }) {
    return (
        <section className={`
            flex flex-col gap-4 text-fit-00 w-full container sm:items-center px-5 py-8 sm:mx-auto rounded-4xl animate-fade-in 
            first-of-type:[&>h2]:text-fit-reg first-of-type:[&>h2]:text-6xl first-of-type:[&>h2]:font-bold first-of-type:[&>h2]:animate-skew-x
            ${props.className || ""}
            `
            }>
            {props.title && <h2 className={`font-poppins text-3xl font-semibold`}>
                {props.title}
            </h2>}
            {props.children}
        </section>
    )
}