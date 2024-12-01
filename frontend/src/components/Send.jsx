import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const Send=({count})=>{

    const navigate=useNavigate();

    return(
        <div className="pl-7 pr-7 flex justify-between">
            <div className="flex">
                <div className="pl-2.5 flex flex-col justify-center text-sm h-10 w-10 border rounded-full bg-slate-300 ">
                    U{count}
                </div>
                <div className="pl-3 pt-2">
                    User {count}
                </div>
            </div>
            <div>
                <Button label={"Send Money"} onClick={(e)=>{
                    navigate("/send_money")
                }} />
            </div>
        </div>
    )
}