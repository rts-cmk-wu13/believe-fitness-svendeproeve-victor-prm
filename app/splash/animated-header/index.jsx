import CompanyLogo from "@/components/ui/company-logo"

export default function AnimatedHeader() {
    return (
        <header className='container mx-auto p-5'>
            <hgroup className="ml-5 cust-form flex-col">
                <h1 className="text-5xl"><CompanyLogo lines={2} /></h1>
                <span className="cust-grid-stack items-center animate-fade-in-ltr">
                    <p className="font-poppins text-xl font-semibold">Train like a pro</p>
                    <hr className="border-0 h-1 w-20 bg-linear-90 from-black/00 via-fit-drk/25 to-black  -translate-x-[110%]" />
                </span>
            </hgroup>
        </header>
    )
}