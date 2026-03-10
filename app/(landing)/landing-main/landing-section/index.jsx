export default function LandingSection({ ...props }) {
    const firstSectionHeading = "first-of-type:[&>h2]:"

    return (
        <section className={`
            flex flex-col gap-4 text-fit-00 w-full mb-20 container sm:items-center sm:mx-auto rounded-4xl p-10
            ${firstSectionHeading}text-fit-reg ${firstSectionHeading}text-6xl ${firstSectionHeading}font-bold ${firstSectionHeading}animate-skew-x
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