import Image from "next/image"
import Link from "next/link"

export default function ClassTrainer({ ...props }) {
    const d = props.data

    return (
        <article className="relative flex items-center gap-4 rounded-2xl max-w-sm transition-all hover:opacity-80 hover:text-fit-reg">
            <Image
                src={d.asset.url}
                alt={`Profile image for trainer named ${d.trainerName}`}
                width={240}
                height={240}
                className="aspect-square w-24 object-cover rounded-2xl ring ring-fit-9e"
                loading="eager"
            />
            <Link href={`/search?q=${d.trainerName}`} className={`after:absolute after:inset-0`}>
                <p className="font-semibold">{d.trainerName}</p>
            </Link>

        </article>
    )
}