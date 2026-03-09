export default function LandingSection({ ...props }) {
    return (
        <section className="flex flex-col gap-4 text-fit-00 w-full mb-20 container sm:items-center sm:mx-auto py-2 first-of-type:[&>h2]:text-fit-reg first-of-type:[&>h2]:text-6xl first-of-type:[&>h2]:font-bold">
            {props.title && <h2 className={`font-poppins text-3xl font-semibold`}>
                {props.title}
            </h2>}
            {props.children}
        </section>
    )
}