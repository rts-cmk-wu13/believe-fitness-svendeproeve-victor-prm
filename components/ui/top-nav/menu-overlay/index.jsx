import Link from "next/link"

export default function MenuOverlay({ ...props }) {
    const isLoggedIn = false;

    console.log(props.toggle)

    return (
        <div className={
            `fixed inset-0 h-full bg-fit-ff -z-10
            ${props.toggle ? "animate-fade-in" : `${props.toggleInitialized ? "animate-fade-out" : "hidden"}`}
            `}
        >
            <ul className="flex flex-col text-2xl font-poppins font-medium gap-8 h-fit w-40 text-center mt-16 mx-auto">
                <li>
                    <Link className="p-4" href={"/"}>Home</Link>
                </li>
                <li>
                    <Link className="p-4" href={"/classes"}>Classes</Link>
                </li>
                <li>
                    <Link className="p-4" href={"/search"}>Search</Link>
                </li>
                <li>
                    <Link className="p-4" href={"/profile"}>Profile</Link>
                </li>
                {
                    !isLoggedIn ? (
                        <li>
                            <Link className="p-4" href={"/"}>Login</Link>
                        </li>
                    ) : (
                        <li>
                            <button className="p-4" href={"/"}>Log out</button>
                        </li>
                    )
                }
            </ul>

        </div >

    )
}