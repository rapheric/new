
interface Objective {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const ObjectiveCard = ({ title, description, icon }: Objective) => {
    return (
        <div className="flex flex-col gap-2  p-4 rounded-lg shadow-lg  items-center text-center bg-white  h-[250px] ">
            <div className="flex items-center justify-center text-4xl mb-6 text-blue-500">{icon}</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4 ">{title}</h1>
            <p className="text-gray-500">{description}</p>
        </div>
    )
}

export default ObjectiveCard