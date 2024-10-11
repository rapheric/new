import { useState } from "react";
import FullInput from "../../global/components/fullInput";
import RoundButton from "../../global/components/roundButton";
import sideBarImage from "../../assets/images/registerSidebarImg.png";
import { useNavigate } from "react-router-dom";
import TextButton from "../../global/components/textButton";
const RegisterPage = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const navigate = useNavigate()

  return (
    <div className="w-full h-[100vh]   bg-white flex flex-col items-center py-[20px] ">
      <h1 className="text-4xl">
        <span className=" font-bold mr-4 text-gray-700">Registration</span>
        <span> Form</span>
      </h1>
      <section className="flex flex-row w-2/3  bg-gray-300 shadow-lg mt-3 rounded-[20px] ">
        <div className="w-1/2 p-3 ">
          <h3 className="text-xl font-bold text-stone-600">DLMP</h3>
          <h2 className=" text-4xl text-stone-700 mt-3">
            Register to continue
          </h2>
          <section className="mt-3 flex flex-col pr-10">
            <FullInput
              title="firstname"
              value={firstName}
              callBack={(e: any) => {
                setFirstName(e.target.value);
              }}
              inputType="text"
            />
            <FullInput
              title="middlename (optional)"
              value={middleName}
              callBack={(e: any) => {
                setMiddleName(e.target.value);
              }}
              inputType="text"
            />
            <FullInput
              title="lastname"
              value={lastName}
              callBack={(e: any) => {
                setLastName(e.target.value);
              }}
              inputType="text"
            />
            <FullInput
              title="email"
              value={email}
              callBack={(e: any) => {
                setEmail(e.target.value);
              }}
              inputType="email"
            />

            <FullInput
              title="password"
              value={password}
              callBack={(e: any) => {
                setPassword(e.target.value);
              }}
              inputType="password"
            />
            <FullInput
              title="confirm password"
              value={confirmPassword}
              callBack={(e: any) => {
                setConfirmPassword(e.target.value);
              }}
              inputType="password"
            />
          </section>
          <div className="flex flex-row gap-1 m-2">
            <input type="checkbox" />
            <p>
              I have read and accept the <span>terms and conditions</span>
            </p>
          </div>
          <RoundButton
            bgColor="bg-green-400"
            width="2/3"
            title="Sign-Up"
            callBack={() => { navigate("/auth/confirm-email") }}
            textColor="stone-600"
            icon={<></>}
          />
          <p className="my-3">
            already have an account?{" "}
            <TextButton icon={<></>} bgColor='transparent' width='fit' title='login' callBack={() => { navigate("/auth/login") }} textColor='blue-500' />
          </p>
        </div>

        <div className="w-1/2">
          <img
            src={sideBarImage}
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
