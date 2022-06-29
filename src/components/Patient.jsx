import react,{useState,useEffect} from "react"

import PatientView from "./PatientView"
import PatientAdd from "./PatientAdd"

const Patient = ({at}) =>{

    const [Patients,setPatients] = useState([])
    const [detail,setDetail] = useState(0)
    const [vital,setVital] = useState(0)
    const [addP,setAddP] = useState(0)

    useEffect(()=>{
        const options = {
            method : 'GET',
            headers:{
                'accept': 'application/json',
                'Authorization': 'Bearer ' + at

            }
        }
        fetch("http://localhost:8000/patient/get/user/list/",options)
            .then(res => res.json())
            .then(data => setPatients(data))
    },[setAddP])



    return(
        addP? <PatientAdd setAddP={setAddP} /> :
            vital ? <PatientView hid={Patients[detail-1].hardware_id} uid={Patients[detail-1].id} setVital={setVital} /> :
            detail ?
                <div className='p-details'>
                    <div className="p-home-render-item">Name   : {Patients[detail-1].name}</div>
                    <div className="p-home-render-item">Age    : {Patients[detail-1].age}</div>
                    <div className="p-home-render-item">Phone  : {Patients[detail-1].phone_no}</div>
                    <div className="p-home-render-item">Email  : {Patients[detail-1].email_id}</div>
                    <div className="p-home-render-item">DOB    : {Patients[detail-1].dob}</div>
                    <div className="p-home-render-item">Gender : {Patients[detail-1].gender}</div>
                    <div className="p-home-render-item" style={{background:"blue",color:"white"}} onClick={()=>{setVital(1)}}>Patient Vitals</div>
                    <div className="p-home-render-item" style={{background:"red",color:"white"}} onClick={()=>{setDetail(0)}}>Back</div>
                </div>
            :
            <div className="render-con">
            {
                Patients.map((item,idx) =>
                <div className="home-render-item" onClick={()=>{setDetail(idx+1)}}>
                    <div>{idx}</div>
                    <div>{item.name}</div>
                    <div>{item.blood_group}</div>
                </div>
                )
            }
                <div className="home-render-item" style={{color:"white",background:"green",display:"flex",alignItems:"center",justifyContent:"center"}} onClick={()=>setAddP(1)}>
                    <div>ADD PATIENT</div>
                </div>
            </div>
    )
}

export default Patient;