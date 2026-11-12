interface CardProps {
    title: string;
    description: string;
    icon: React.ReactElement;
    background: string;
}

export default function Cards({title, description, icon, background}: CardProps) {
    return (
        <>
            <div className="bg-white-border border-[#ccc] rounded-lg p-8 mb-12 max-w-100 shadow-sm">
            <div className={`${background} rounded-2xl p-2 w-12`}>{icon}</div>

            <p className="mt-6 font-bold text-[18px]">{title}</p>
        

            <p className="mt-4">{description}</p>

            </div>
        </>
    )
}