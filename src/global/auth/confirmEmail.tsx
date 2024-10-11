import { useState } from 'react'
import FullInput from '../../global/components/fullInput'
import sideBarImage from "../../assets/images/registerSidebarImg.png"
import RoundButton from '../../global/components/roundButton'
import TextButton from '../../global/components/textButton'
import { useNavigate } from 'react-router-dom'

const ConfirmEmail = () => {
    const [textCode, setTextCode] = useState<string>("")

    const navigate = useNavigate()

    return (
        <div className="w-full h-screen overflow-y-scroll flex flex-col items-center py-[100px] ">
            <h1 className="text-4xl">
                <span className=" font-extrabold mr-4">Validate</span>
                <span>Email</span>
            </h1>
            <section className="flex flex-row items-center w-2/3 bg-slate-200 shadow-lg mt-3 rounded-[20px] ">
                <div className="w-1/2 p-10">
                    <h3 className="text-xl font-bold text-stone-600">DLMP</h3>
                    <h2 className=" text-4xl text-stone-700 mt-5">Enter email code sent</h2>
                    <section className="mt-5 flex flex-col pr-10">
                        <FullInput title="code" value={textCode} callBack={(e:any) => { setTextCode(e.target.value) }} inputType="text" />
                    </section>
                    <div className='w-full flex flex-row justify-end pr-10'>
                        <TextButton bgColor='transparent' width='fit' title='resend email' callBack={() => { }} textColor='blue-500' icon={<></>} />
                    </div>
                    <RoundButton bgColor="bg-cyan-500" width="full" title="Confirm code" callBack={() => { navigate("/auth/login") }} textColor="stone-600" icon={<></>} />
                </div>

                <div className="w-1/2">
                    <img src={sideBarImage} className="w-full h-full object-cover rounded-[20px]" />
                </div>
            </section>
        </div>
    )
}

export default ConfirmEmail
