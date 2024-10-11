import { FaArrowRight } from "react-icons/fa"

const Logistic = () => {
    return (
        <section className="w-full bg-blue-950 h-[360px] my-25">
            <div className="flex items-center justify-between  max-w-7xl  gap-3 p-4 mx-auto ">
                <div className="flex flex-col py-2 items-start flex-1">
                    <h1 className="text-orange-600 font-bold text-2xl my-3 items-start">Digital logistics marketplace platform</h1>
                    <h2 className="text-white font-semibold text-xl my-2">Revolutionalizing imports, exports and Logistics ecosystems</h2>
                    <p className="text-white my-2">By automating end-to-end trade processes, we are facilitating global trade with minimal friction</p>

                    <ul className=" my-3 list-disc pl-5 space-y-2 ">
                        <li className="text-white ">Automated Trade processes</li>
                        <li className="text-white">Intergrated Logistics ecosystems</li>
                        <li className="text-white">Enhanced Transparency and Accountability</li>
                    </ul>
                    <button className="bg-orange-500 text-white font-bold p-3 flex items-center gap-2 w-45 h-15 rounded-md shadow-md">
                        Get started Today<span><FaArrowRight /></span>
                    </button>
                </div>
                <div className="  flex flex-col flex-1 ">
                    <p className="text-white my-4" >"The platform automates workflows, integrates logistics and financial services,
                        and ensures real-time visibility. Its designed to reduce delays and foster collaboration
                        across the global supply chain."
                    </p>

                    <h1 className="text-white">John Doe(CEO, Trade Solutions)</h1>
                </div>
            </div>
        </section>
    )
}

export default Logistic