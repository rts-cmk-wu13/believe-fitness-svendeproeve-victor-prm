import { LuDumbbell } from "react-icons/lu";

export default function SpinningLoader() {
    return (
        <div className="fixed bg-fit-reg backdrop-blur-sm inset-0 flex items-center justify-center font-inter z-1000">
            <LuDumbbell className="size-12 animate-spin" />
        </div>
    )
}