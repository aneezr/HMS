import React,{useState} from "react"

const PatientAdd = ({setAddP}) =>{

    const [name,setName] = useState("")
    const [emailId,setEmailId] = useState("")
    const [phoneNo,setPhoneNo] = useState("")
    const [address,setAddress] = useState("")
    const [country,setCountry] = useState("")
    const [password,setPassword] = useState("")
    const [age,setAge] = useState("")
    const [gender,setGender] = useState("")
    const [dob,setDob] = useState("")
    const [hardwareId,setHardwareId] = useState("")
    const [bloodGroup,setBloodGroup] = useState("")
    
    const AddPatient = () =>{
        const data = {
            name: name,
            email_id: emailId,
            phone_no: phoneNo,
            address: address,
            country: country,
            age: age,
            gender: gender,
            dob: dob,
            hardware_id: hardwareId,
            password: password,
            blood_group: bloodGroup
        }
        console.log(data)
        const options = {
            method : "POST",
            headers :{
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch("http://localhost:8000/patient/add/new/",options)
            .then(res =>{if(res.status==200){setAddP(0)}})
    }

    return(
    <div className='patient-add-con'>
            <div style={{width:"80%",display: "grid",gridTemplateColumns: "1fr 1fr",gridTemplateRows: "1fr, 1fr 1fr",gridColumnGap: "0px",gridRowGap: "0px"}}>
                <div className="home-render-item">Name : <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /></div>
                <div className="home-render-item">Email : <input type="email" value={emailId} onChange={(e)=>setEmailId(e.target.value)} /></div>
                <div className="home-render-item">Date of Birth : <input type="text" value={dob} onChange={(e)=>setDob(e.target.value)} /></div>
                <div className="home-render-item">Age : <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} /></div>
                <div className="home-render-item">Phone No : <input type="text" value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)} /></div>
                <div className="home-render-item">Hardware ID : <input type="text" value={hardwareId} onChange={(e)=>setHardwareId(e.target.value)} /></div>
                <div className="home-render-item">Gender : <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} /></div>
                <div className="home-render-item">Address : <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} /></div>
                <div className="home-render-item">Country : <input type="text" value={country} onChange={(e)=>setCountry(e.target.value)} /></div>
                <div className="home-render-item">Password : <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} /></div>
                <div className="home-render-item">Blood Group : <input type="text" value={bloodGroup} onChange={(e)=>setBloodGroup(e.target.value)} /></div>
                <div className="home-render-item" onClick={()=>{AddPatient()}} style={{background:"green",color:"white"}} >Add Patient</div>
            </div>
    </div>
    )
}

export default PatientAdd;
