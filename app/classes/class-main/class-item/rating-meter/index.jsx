import { LuStar } from "react-icons/lu";
import { LuStarHalf } from "react-icons/lu";
import { LuStarOff } from "react-icons/lu";

export default function RatingMeter({ ...props }) {
    const r = Number(props.rating);
    const r_floored = Math.floor((r * 2)) / 2
    const ratingStars = [1, 2, 3, 4, 5]
    const enlarge = props.enlarge || false;

    const RatingStar = ({ ...props }) => {
        if (props.index === null) {
            return (
                <span className="cust-grid-stack shrink-0">
                    <LuStarOff className={`opacity-30 ${enlarge ? "size-6" : "size-3"}`} />
                </span>
            )

        }

        if (r_floored - 0.5 > props.index) {
            return (
                <span className="cust-grid-stack shrink-0">
                    <LuStar className={`opacity-30 ${enlarge ? "size-6" : "size-3"}`} />
                    <LuStar className={`fill-black ${enlarge ? "size-6" : "size-3"}`} />
                </span>
            )

        }

        if (r_floored > props.index) {
            return (
                <span className="cust-grid-stack shrink-0">
                    <LuStar className={`opacity-30 ${enlarge ? "size-6" : "size-3"}`} />
                    <LuStarHalf className={`fill-black ${enlarge ? "size-6" : "size-3"}`} />
                </span>
            )
        }

        return (
            <span className="cust-grid-stack shrink-0">
                <LuStar className={`opacity-30 ${enlarge ? "size-6" : "size-3"}`} />
            </span>
        )
    }

    const unrated = r < 0;

    return (
        <div className={`flex gap-2 items-center  ${props.className ? props.className : ""}`}>
            <div className={`flex gap-1 bg-fit-lte w-fit py-0.5 px-2 rounded-4xl items-center`}>

                {!unrated ?
                    (ratingStars.map((star, idx) => <RatingStar key={idx} index={idx} />))
                    :
                    (ratingStars.map((star, idx) => <RatingStar key={idx} index={null} />))}
            </div>
            <p className={`font-poppins font-medium hidden sm:block ${enlarge ? "text-xl" : "text-sm"}`}>{!unrated ? `${r.toFixed(2)} | 5` : "? | ?"}</p>
        </div>

    )
}