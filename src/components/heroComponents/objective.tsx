import { objectivesData } from "../../global/auth/common/data"
import ObjectiveCard from "./objectiveCard"

const Objective = () => {
    return (
        <div className="pt-10 bg-gray-300 flex flex-col items-center  ">
            <div className="flex items-center">
                <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12 ">Our Objectives</h1>
            </div>
            <div className="w-full max-w-7xl grid grid-cols-3 bg-gray-300  gap-4 mx-auto mb-12   ">

                {
                    objectivesData.map((objective, index) => (
                        <ObjectiveCard

                            key={index}
                            icon={objective.icon}
                            title={objective.title}
                            description={objective.description}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Objective