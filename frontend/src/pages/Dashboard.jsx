import { Appbar } from "../components/Appbar"
import { Send } from "../components/Send"
import { Users } from "../components/Users"

export const Dashboard=() =>{
    return(
        <div>
            <Appbar />
            <div className="text-lg font-bold mt-7 pl-8">
                Your Balance : $10,000
            </div>
            <Users />
            <Send count={1} />
            <Send count={2} />
            <Send count={3} />
        </div>
    )
}