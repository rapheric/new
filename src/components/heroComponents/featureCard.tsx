
interface Featured {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: Featured) => {
  return (

    <div className="flex flex-col gap-2  p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 items-center text-center bg-white     h-[250px] ">
      <div className="flex items-center justify-center text-4xl mb-6 text-blue-500">{icon}</div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4 ">{title}</h1>
      <p className="text-gray-500">{description}</p>
    </div>

  )
}

export default FeatureCard