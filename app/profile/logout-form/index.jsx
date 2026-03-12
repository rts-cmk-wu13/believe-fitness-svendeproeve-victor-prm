import { logoutCurrentUser } from "./action"
import { LuLogOut } from "react-icons/lu";
import ButtonSecondary from "@/components/ui/buttons/button-secondary";

export default function LogoutForm() {
    return (
        <form
            action={logoutCurrentUser}
            className="ml-auto"
        >
            <ButtonSecondary
                label="Log out"
                icon={<LuLogOut />}
            />
        </form>
    )
}