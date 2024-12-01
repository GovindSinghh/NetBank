import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"


export const SendMoney= () => {
    return(
        <div className="bg-slate-300 h-screen flex justify-center bg-">
            <div className="flex flex-col justify-center">
                <div className="border rounded-lg bg-white h-max w-80 text-center">
                    <Heading label={"Send Money"}  />
                    <div className="ml-3 mt-10 px-4 py-1 flex">
                        <div className="flex flex-col justify-center text-lg text-white h-12 w-12 border rounded-full bg-green-600">
                            A
                        </div>
                        <div className="pl-3 text-xl font-bold py-2.5">
                            Friend's Name
                        </div>
                    </div>
                    <div className="ml-6 mr-6 py-4">
                        <InputBox label={"Amount (in Rs)"} placeholder={"Enter Amount"} />
                        <Button label={"Initiate Transfer"} />
                    </div>
                </div>

            </div>
        </div>
    )
}