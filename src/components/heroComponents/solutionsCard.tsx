
interface Solution {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const SolutionCard = ({ title, description, icon }: Solution) => {
    return (
        
            <div className="flex items-start space-x-6 px-[15px] ">
                <div className="flex-shrink-0">
                <div className="bg-blue-600 p-4 rounded-full text-white text-3xl">{icon}</div>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-bold text-white mb-4 ">{title}</h1>
                    <p className="text-white">{description}</p>
                </div>
            </div>
        
    )
}

export default SolutionCard