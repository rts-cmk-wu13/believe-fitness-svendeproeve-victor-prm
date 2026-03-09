export default function LandingSection({ ...props }) {
    return (
        <section className="flex flex-col gap-4 text-fit-00 w-full mb-20 container sm:items-center sm:mx-auto py-2">
            {props.title && <h2 className="font-poppins text-4xl font-medium">{props.title}</h2>}
            {props.children}
        </section>
    )
}