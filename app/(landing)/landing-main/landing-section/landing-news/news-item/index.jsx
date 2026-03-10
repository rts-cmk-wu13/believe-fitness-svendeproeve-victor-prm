import Image from "next/image"


export default function NewsItem({ ...props }) {
    const d = props.data
    
    return (
        <article className="flex flex-col gap-3 text-black font-inter">
            <h3 className="font-poppins font-semibold text-2xl">{d.title}</h3>
            <Image
                alt={`Image for the news article "${d.title}"`}
                src={d.asset.url}
                width={1500}
                height={1000}
                className="rounded-md"
            />
            <p className="">{d.text}</p>
        </article>
    )
}