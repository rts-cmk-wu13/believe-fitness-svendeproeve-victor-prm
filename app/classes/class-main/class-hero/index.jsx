import Image from "next/image";
import ButtonPrimary from "@/components/ui/buttons/button-primary";
import RatingMeter from "../class-item/rating-meter";
import { fetchFromAPI } from "@/lib/dal/general";
import { averageClassRating } from "@/lib/utils";

export default async function ClassHero({ ...props }) {
    const d = props.data;
    const u = props.user
    console.log("💌",u)

    const ratings = await fetchFromAPI(`/api/v1/classes/${d.id}/ratings`)
    const currentRating = averageClassRating(ratings)

    return (
        <section className='cust-grid-stack bg-fit-drk overflow-hidden py-5 rounded-[0_0_3rem_3rem] h-fit'>
            <figure className="relative scale-120 after:absolute after:inset-0 after:bg-black/40 animate-fade-in max-h-140">
                <Image
                    src={d.asset.url}
                    alt={`Image for event named ${d.className}`}
                    width={1000}
                    height={1000}
                    className="size-full object-cover object-top"
                    loading="eager"
                />
            </figure>
            <div className="w-full container mx-auto self-end z-10">
                <hgroup className="flex flex-col gap-3 w-fit  px-5">
                    <h2 className="font-poppins font-semibold text-fit-reg text-3xl sm:text-4xl">
                        {d.className}
                    </h2>
                    <div className="flex justify-between gap-8 rounded-[100vw] bg-fit-ff/33 backdrop-blur-3xl pl-3">
                        <RatingMeter rating={currentRating} enlarge={true} />
                        {!props.link ?
                            (<ButtonPrimary
                                label="Rate"
                                disabled={!u}
                            />)
                            :
                            (<ButtonPrimary label="See more" type="link" href={`/classes/${d.id}`} />)}
                    </div>
                </hgroup>
            </div>
        </section>
    )
}