import { FullInputType } from "../../types/components.types";

function FullInput({ title, value, callBack }: FullInputType) {
    return (
        <div className="w-full my-1 border-b border-stone-500 ">
            <p className="text-stone-600">{title}</p>
            <input className="bg-transparent  p-1 focus:outline-none " type="text" value={value} onChange={callBack} />
        </div>
    )
}

export default FullInput
