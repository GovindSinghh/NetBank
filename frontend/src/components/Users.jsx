import { InputBox } from "./InputBox"


export const Users= () => {
    return(
        <div className="mb-5">
            <div className="text-slate-600 text-2xl font-bold mt-8 ml-7">
                Users
            </div>
            <div className="pr-20 pl-7">
                <InputBox placeholder={"Search Users..."} />
            </div>
            <div className="flex flex-col">

            </div>
        </div>
    )
}