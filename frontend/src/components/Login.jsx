import { useState } from "react";
import { login, register } from "../services/api";
import Editor from "./Editor";

export default function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const [isRegister,setIsRegister] = useState(false);

const [loggedIn,setLoggedIn] = useState(false);


const validateEmail = (email) => {

return /\S+@\S+\.\S+/.test(email);

};



const handleSubmit = async () => {

try{

if(!validateEmail(email)){

alert("Invalid Email");

return;

}


if(isRegister){

await register({

email,
password

});

alert("Registered successfully");

}

else{

const res = await login({

email,
password

});

localStorage.setItem("token",res.data.token);

setLoggedIn(true);

}

}

catch(err){

alert(err.response.data.detail);

}

};




if(loggedIn){

return <Editor/>

}



return(

<div className="flex justify-center items-center min-h-screen bg-gray-100">


<div className="bg-white p-8 rounded-lg shadow-md w-80">


<h2 className="text-2xl font-bold mb-5 text-center">

{isRegister ? "Register" : "Login"}

</h2>



<input

className="border border-gray-300 p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"

placeholder="Email"

onChange={(e)=>setEmail(e.target.value)}

/>



<input

className="border border-gray-300 p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"

placeholder="Password"

type="password"

onChange={(e)=>setPassword(e.target.value)}

/>



<button

className="bg-blue-500 hover:bg-blue-600 text-white p-2 w-full rounded transition"

onClick={handleSubmit}

>

{isRegister ? "Register" : "Login"}

</button>



<p

className="text-blue-500 mt-4 cursor-pointer text-center hover:underline"

onClick={()=>setIsRegister(!isRegister)}

>

{isRegister ?

"Already user? Login"

:

"New user? Register"

}

</p>


</div>

</div>

)

}



