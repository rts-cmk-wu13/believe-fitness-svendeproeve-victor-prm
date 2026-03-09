import Image from "next/image"


export default function NewsItem({ ...props }) {
    console.log(props.data.asset)
    return (
        <article className="flex flex-col gap-3 text-black font-inter">
            <h3 className="font-poppins font-bold text-2xl">{props.data.title}</h3>
            <Image
                alt="Hej"
                src={props.data.asset.url}
                width={1500}
                height={1000}
            />
            <p className="">{props.data.text}</p>
        </article>
    )
}