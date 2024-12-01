import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { ButtonWarning } from "../components/ButtonWarning";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";


export function Signup(){

    const navigate=useNavigate();
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    return(
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center h-max px-4 py-2">
                    <Heading label="Sign Up" />
                    <SubHeading label="Enter your information to create an account" />
                    <InputBox label="First Name" placeholder="John" onChange={(e)=>{
                        setFirstName(e.target.value)
                    }} />
                    <InputBox label="Last Name" placeholder="Doe" onChange={(e)=>{
                        setLastName(e.target.value)
                    }} />
                    <InputBox label="Email" placeholder="John@example.com" onChange={(e)=>{
                        setUsername(e.target.value)
                    }} />
                    <InputBox label="Password" placeholder="*****" onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                    <Button label={"Sign up"} onClick={async ()=>{
                        const response=await axios.post("http://localhost:3000/api/v1/user/signup",{
                            username,
                            firstName,
                            lastName,
                            password
                        });
                        localStorage.setItem("token",response.data.token);
                        navigate("/dashboard");
                    }} />
                    <ButtonWarning label={"Already have an account?"} buttonText={"Login"} to={"/signin"} />
                </div>
            </div>
        </div>
    );
}
