export default function PageContainer({ children, className }) {
    return (
        <div className={`flex flex-col gap-12 mx-auto max-w-[1360] min-h-screen ${className}`}>
            {children}
        </div>
    )
}