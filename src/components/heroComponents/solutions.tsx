import { solutionsData } from "../../global/auth/common/data"
import solImage from "../../assets/vectors/vector2.png"
import SolutionCard from "./solutionsCard"

const Solution = () => {
    return (
        <section className=" py-20 bg-gradient-to-r from-indigo-900 to-blue-900">
            <div className=" max-w-7xl flex flex-col items-center mx-auto  ">

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 ">
                    <div className="object-cover rounded-l-md w-full  ">
                        <img className="w-full h-auto " src={solImage} />
                    </div>
                    <div className="flex flex-col  items-center h-auto">
                        <div className="flex items-center">
                            <h1 className="text-4xl font-extrabold text-white  mb-5 text-center ">Our solutions</h1>
                        </div>
                        <div className="w-full flex flex-col  gap-4 mx-auto mb-12   ">
                            {
                                solutionsData.map((solution, index) => (
                                    <SolutionCard
                                        key={index}
                                        icon={solution.icon}
                                        title={solution.title}
                                        description={solution.description}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Solution