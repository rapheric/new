import  { ReactElement } from 'react'

interface UserNavBtton {
  icon: ReactElement;
  title: String;
  btnColor: String;
  callBack: () => void;
}

const UserNavButton = ({ icon, title, btnColor, callBack }: UserNavBtton) => {
  return (
    <button
      className={` ${btnColor} justify-center gap-2 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600`}
      onClick={callBack}
    >
      {<>{icon}</>}
      {title}
    </button>
  )
}

export default UserNavButton
