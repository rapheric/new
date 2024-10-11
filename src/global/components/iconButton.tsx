import { ButtonInterface } from "../../types/components.types";

const IconButton = ({ width, icon, callBack, textColor }: ButtonInterface) => {
    return (
        <button className={`py-2 w-${width} text-${textColor}`} onClick={callBack}>{icon}</button>
    )
}

export default IconButton
