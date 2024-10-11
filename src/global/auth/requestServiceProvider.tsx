import { useState } from "react"
import FullInput from "../../global/components/fullInput"
import RoundButton from "../../global/components/roundButton"
import TextCheckBox from "../../global/components/textCheckBox"
import sideBarImage from "../../assets/images/registerSidebarImg.png"
import { Services } from "./common/data"
import { useNavigate } from "react-router-dom"

const RequestServiceProvider = () => {
    const [companyName, setCompanyName] = useState<string>("")
    // const [servicesOffered, setServicesOffered] = useState<[]>([])
    const navigate = useNavigate()
    return (
        <div className="w-full h-screen overflow-y-scroll flex flex-col items-center py-[100px] ">
            <h1 className="text-4xl">
                <span className=" font-extrabold mr-4">Service Provider Application</span>
                <span>Form</span>
            </h1>
            <section className="flex flex-row w-2/3 bg-slate-200 shadow-lg mt-3 rounded-[20px] ">
                <div className="w-1/2 p-10">
                    <h3 className="text-xl font-bold text-stone-600">DLMP</h3>
                    <h2 className=" text-4xl text-stone-700 mt-5">Service Provider Details</h2>
                    <section className="mt-5 flex flex-col pr-10">
                        <FullInput title="company name (optional)" value={companyName} callBack={(e:any) => { setCompanyName(e.target.value) }} inputType="text" />
                    </section>
                    <h2 className="mt-3 mb-2">Select one or more services you can offer:</h2>
                    <div className="flex flex-row flex-wrap w-full mb-5">
                        {Services.map((item, index) => <TextCheckBox key={index} title={item} />)}
                    </div>
                    <RoundButton icon={<></>} bgColor="bg-green-400" width="2/3" title="Send Application" callBack={() => { navigate("/user/dashboard") }} textColor="stone-600" />
                </div>

                <div className="w-1/2">
                    <img src={sideBarImage} className="w-full h-full object-cover rounded-[20px]" />
                </div>
            </section >
        </div >
    )
}

export default RequestServiceProvider
