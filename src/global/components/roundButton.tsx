import { ButtonInterface } from "../../types/components.types";

const RoundButton = ({ bgColor, width, title, callBack, textColor }: ButtonInterface) => {
  return (
    <button className={`${bgColor} w-${width} text-center py-2 mr-5 rounded-full`} onClick={callBack}>
      <p className={`font-bold text-${textColor}`}>{title}</p>
    </button>
  )
}

export default RoundButton;
