import Image from "next/image"

export default function ClassTrainer({ ...props }) {
    const d = props.data

    return (
        <article className="flex items-center gap-4 rounded-2xl">
            <Image
                src={d.asset.url}
                alt={`Profile image for trainer named ${d.trainerName}`}
                width={1500}
                height={1500}
                className="aspect-square w-24 object-cover rounded-2xl ring ring-fit-9e"
                loading="eager"
            />
            <p className="font-semibold">{d.trainerName}</p>
        </article>
    )
}