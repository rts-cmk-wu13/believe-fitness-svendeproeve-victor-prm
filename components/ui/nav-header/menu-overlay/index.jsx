import Link from "next/link"
import LogoutForm from "@/app/profile/logout-form";

export default function MenuOverlay({ ...props }) {
    const isLoggedIn = props.isLoggedIn || false;

    return (
        <div className={
            `fixed inset-0 h-screen bg-fit-ff/66 backdrop-blur-3xl -z-10
            ${props.toggle ? "animate-fade-in" : `${props.toggleInitialized ? "animate-fade-out" : "hidden"}`}
            `}
        >
            {
                props.toggle &&
                <ul className="flex flex-col text-2xl font-poppins font-medium gap-8 h-fit w-60 text-center mt-16 mx-auto">
                    <li>
                        <Link className="p-1 block hover:opacity-60" href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link className="p-1 block hover:opacity-60" href={"/classes"}>Classes</Link>
                    </li>
                    <li>
                        <Link className="p-1 block hover:opacity-60" href={"/search"}>Search</Link>
                    </li>
                    <li>
                        <Link className="p-1 block hover:opacity-60" href={"/profile"}>Profile</Link>
                    </li>
                    {
                        !isLoggedIn ? (
                            <li>
                                <Link className="p-4" href={"/auth/login"}>Login</Link>
                            </li>
                        ) : (
                            <LogoutForm className="mx-auto" />
                        )
                    }
                </ul>
            }


        </div >

    )
}