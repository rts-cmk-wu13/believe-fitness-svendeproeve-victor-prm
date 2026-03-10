import Link from "next/link"
import Image from "next/image";
import RatingMeter from "./rating-meter";
import { formattedClassTime } from "@/lib/utils"
import { fetchFromAPI } from "@/lib/dal/general";
import { averageClassRating } from "@/lib/utils";



export default async function ClassItem({ ...props }) {
    const d = props.data;
    const ratings = await fetchFromAPI(`/api/v1/classes/${d.id}/ratings`)
    const currentRating = averageClassRating(ratings)

    return (
        <article className='cust-grid-stack relative rounded-2xl overflow-hidden aspect-square max-w-2xl font-inter snap-center'>
            <Image
                src={d.asset.url}
                alt={`Image for event named ${d.className}`}
                width={1000}
                height={1000}
                className="size-full object-cover"
            />
            <hgroup className="bg-fit-reg size-fit flex flex-col gap-0.5 p-2 pr-8 rounded-[0_2rem_0_0] self-end *:leading-tight rounded-bl-2xl">
                <Link
                    href={`/classes/${d.id}`}
                    className={`after:absolute after:inset-0`}
                    >
                    <h3 className="font-poppins font-semibold ">
                        {d.className}               
                    </h3>
                </Link>
                <small className="font-semibold">{formattedClassTime(d.classDay, d.classTime)}</small>
                <RatingMeter rating={currentRating} />
            </hgroup>
        </article>
    )
}