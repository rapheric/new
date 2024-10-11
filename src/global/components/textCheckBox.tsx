import { CheckboxInterface } from "../../types/components.types";

const TextCheckBox = ({ title }: CheckboxInterface) => {
    return (
        <div className='flex items-center gap-2 w-1/2' >
            <input type='checkbox' />
            <p>{title}</p>
        </div>
    )
}

export default TextCheckBox
