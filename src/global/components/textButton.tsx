import { ButtonInterface } from"../../types/components.types";

const TextButton = ({ width, title, callBack, textColor }: ButtonInterface) => {
    return (
        <button className={`py-2 w-${width} text-${textColor}`} onClick={callBack}>{title}</button>
    )
}

export default TextButton
