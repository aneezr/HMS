import React,{useState} from "react";
import lg from "./../static/lg.jpg"


const Login = ({setResetPass,setIsLoggedIn,setAt}) => {
    const[p,setP] = useState("")
    const[em,setEm] = useState("")

    const onSubmit = () =>{
        const options ={
            method:"POST",
            headers:{
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                "username": em,
                "password": p
            })
        }
        console.log(options)
        fetch("http://localhost:8000/login/",options)
            .then((res)=>{if(res.status==200){
                res.json().then((data)=>{console.log(data.access_token);setAt(data.access_token);setIsLoggedIn({name:data.name,id:data.id,type:data.user_type,email:data.email_id})})
                }})
            .catch((e)=>console.log(e))
    }
    return(
        <div className="main">
            <div className="main-header">
                    <div className="logo">Health Management System</div>
                    <div></div>
            </div>
            <div className="main-body">
                <img src={lg} style={{marginLeft:"10%",marginTop:"30px",height:"90%",width:'50%'}} />
                <div className="login-con">
                    <div style={{fontWeight:"700",fontSize:"25px",marginTop:"30px"}}>Sign In</div>
                    <div style={{width:"95%"}}>
                        <div style={{marginBottom:"30px"}}>
                            <div style={{marginBottom:"15px",fontWeight:"500",fontSize:"20px"}}>username</div>
                            <input type="text" className="login-input" style={{width:"98%"}} value={em} onChange={(e)=>setEm(e.target.value)} />
                        </div>
                        <div>
                            <div style={{marginBottom:"15px",fontWeight:"500",fontSize:"20px"}}>password</div>
                            <input type="password" className="login-input" style={{width:"98%"}} value={p} onChange={(e)=>setP(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <div onClick={() => onSubmit()} id="login-button" className="login-button">login</div>
                        {/* <div onClick={() => setResetPass(1)} id="signup-button" className="login-button" style={{marginBottom:"15px",fontWeight:"500",fontSize:"18px"}}>Reset Password</div> */}
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Login;
