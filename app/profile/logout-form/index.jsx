import { logoutCurrentUser } from "./action"
import { LuLogOut } from "react-icons/lu";
import ButtonSecondary from "@/components/ui/buttons/button-secondary";

export default function LogoutForm({...props}) {
    return (
        <form
            action={logoutCurrentUser}
            className={`ml-auto ${props.className || ""}`}
        >
            <ButtonSecondary
                label="Log out"
                icon={<LuLogOut />}
                className={"text-base!"}
            />
        </form>
    )
}