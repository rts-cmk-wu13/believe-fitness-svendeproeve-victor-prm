import CompanyLogo from "@/components/ui/company-logo"

export default function AnimatedHeader({ ...props }) {
    const splash = props.splash || false;

    return (
        <header className='container mx-auto p-5'>
            <hgroup className="ml-5 cust-form flex-col">
                <h1 className="text-5xl"><CompanyLogo lines={2} /></h1>
                <span className={`cust-grid-stack items-center animate-fade-in-ltr ${props.splash && "text-fit-ff"}`}>
                    <p className="font-poppins text-xl font-semibold">Train like a pro</p>
                    <hr
                        className={
                            `border-0 h-1 w-20 bg-linear-90 -translate-x-[110%]
                            ${props.splash ? "from-fit-ff/00 via-fit-lte/25 to-fit-ff" : "from-black/00 via-fit-drk/25 to-black"}
                            ` }
                    />
                </span>
            </hgroup>
        </header>
    )
}