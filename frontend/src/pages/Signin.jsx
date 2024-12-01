import { Button } from "../components/Button";
import { ButtonWarning } from "../components/ButtonWarning";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";


export const Signin=() =>{

    return(
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center h-max px-4 py-2">
                    <Heading label="Sign In" />
                    <SubHeading label="Enter your credentials to access your account" />
                    <InputBox label="Email" placeholder="John@example.com" />
                    <InputBox label="Password" placeholder="*****" />
                    <Button label={"Sign in"} />
                    <ButtonWarning label={"Don't have an account?"} buttonText={"Signup"} to={"/signup"} />
                </div>
            </div>
        </div>
    );

}