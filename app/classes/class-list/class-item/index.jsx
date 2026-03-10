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

    console.log(currentRating)




    return (
        <article className='cust-grid-stack rounded-2xl overflow-clip aspect-square max-w-2xl font-inter'>
            {<Image
                src={d.asset.url}
                alt={`Image for event named ${d.className}`}
                width={1000}
                height={1000}
                className="size-full object-cover"
            />}
            <hgroup className="bg-fit-reg size-fit p-4 pr-12 rounded-[0_2rem_0_0] self-end">
                <h3 className="font-poppins font-semibold">{d.className}</h3>
                <p>{formattedClassTime(d.classDay, d.classTime)}</p>
                <RatingMeter rating={currentRating} />
            </hgroup>
        </article>
    )
}