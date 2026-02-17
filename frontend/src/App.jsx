import Login from "./components/Login";
import Editor from "./components/Editor";
import { useAuth } from "./store/authStore";

function App(){

const token = useAuth((state)=>state.token);

return(

<div>



{

token

?

<Editor/>

:

<Login/>

}

</div>

);

}

export default App;



