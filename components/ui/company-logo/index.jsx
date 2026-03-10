export default function CompanyLogo({ ...props }) {
    const lines = props.lines || 1;

    if (lines === 1) {
        return (
            <span className={`text-fit-reg block font-bold uppercase animate-skew-x ${props.className || ""}`}>
                Believe Fitness
            </span>
        )
    } else {
        return (
            <span className={`text-fit-reg font-bold uppercase ${props.className || ""}`}>
                <span className="block animate-skew-x">Believe</span>
                <span className="block animate-skew-x">Fitness</span>
            </span>
        )
    }


}