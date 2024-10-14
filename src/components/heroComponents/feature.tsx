import { featuresData } from "../../global/auth/common/data"
import FeatureCard from "./featureCard"

const Feature = () => {
    return (
        <div className="pt-10 bg-gray-300 flex flex-col items-center  ">
            <div className="flex items-center">
                <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12 animate-fade-in">Our Key Features</h1>
            </div>
            <div className="w-full max-w-7xl grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-300  gap-4 mx-auto mb-12   ">

                {
                    featuresData.map((feature, index) => (
                        <FeatureCard

                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Feature