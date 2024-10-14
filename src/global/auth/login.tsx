import { useState } from 'react'
import FullInput from '../../global/components/fullInput'
import sideBarImage from "../../assets/images/registerSidebarImg.png"
import RoundButton from '../../global/components/roundButton'
import TextButton from '../../global/components/textButton'
import { useNavigate } from "react-router-dom"


const Loginpage = () => {
    const [userName, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const navigate = useNavigate()
    return (
        <div className="w-full h-screen  flex flex-col items-center py-5 md:py-12 lg:py-7 ">
            <h1 className="text-xl md:text-3xl lg:text-4xl">
                <span className=" font-extrabold mr-4">Login</span>
                <span>Form</span>
            </h1>
            <section className="flex flex-row w-4/5 bg-slate-200 shadow-lg mt-3 rounded-[20px] ">
                <div className=" w-full md:w-1/2 p-4 md:p-10 ">
                    <h3 className="text-l font-bold text-stone-600">DLMP</h3>
                    <h2 className=" text-xl md:text-3xl lg:text-4xl text-stone-700 mt-5">Sign in to continue</h2>
                    <section className="mt-5 flex flex-col pr-10">
                        <FullInput title="username" value={userName} callBack={(e: any) => { setUsername(e.target.value) }} inputType="text" />
                        <FullInput title="password" value={password} callBack={(e: any) => { setPassword(e.target.value) }} inputType="password" />
                    </section>
                    <div className='w-full flex flex-row justify-end pr-10'>
                        <TextButton bgColor='transparent' width='fit' title='forgot password?' callBack={() => { navigate("/auth/register") }} textColor='blue-500' icon={<></>} />
                    </div>
                    <RoundButton bgColor="bg-green-400" width="full" title="Sign-In" callBack={() => { navigate("/dashboardLayout") }} textColor="stone-600" icon={<></>} />
                    <p className="my-3">don't have an account? <TextButton icon={<></>} bgColor='transparent' width='fit' title='register' callBack={() => { navigate("/auth/register") }} textColor='blue-500' /> </p>
                </div>

                <div className=" hidden md:w-1/2 md:block">
                    <img src={sideBarImage} className="w-full h-full object-cover rounded-[20px]" />
                </div>
            </section>
        </div>
    )
}

export default Loginpage
