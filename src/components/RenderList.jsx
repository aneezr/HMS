import React,{useState,useEffect} from 'react'

import PatientView from "./PatientView"

import dr_img from "../static/doctor.jpg"
import nurse_img from "../static/nurse.jpg"

const RenderList = ({type,at}) =>{

    const[detail,setDetail] = useState(0)
    const[list,setList] = useState([])

    useEffect(()=>{
        setDetail(0);
        const options = {
            method : 'GET',
            headers:{
                'accept': 'application/json',
                'Authorization': 'Bearer ' + at
            }
        }
        if(type=="nurses"){
            fetch("http://localhost:8000/nurse/get/user/list/",options)
                .then(res => res.json())
                .then(data => setList(data))
        }else if(type == "doctors"){
            fetch("http://localhost:8000/doctorget/user/list/",options)
                .then(res => res.json())
                .then(data => setList(data))    
        }

    },[type])

    const Detail = () =>{
        return(
            <div className='detail-con'>
                <div className='details'>
                    <div className="home-render-item">Name : {list[detail-1].name}</div>
                    <div className="home-render-item">Designation : {list[detail-1].designation}</div>
                    <div className="home-render-item">Phone No : {list[detail-1].phone_no}</div>
                    <div className="home-render-item">Email ID : {list[detail-1].email_id}</div>
                    <div className="home-render-item">Department : {list[detail-1].department}</div>
                    <div className="home-render-item" style={{background:"red",color:"white"}} onClick={()=>{setDetail(0)}}>Back</div>
                </div>
                <div className='detail-img'>
                    <img src={type==="doctors"?dr_img:nurse_img} style={{width:"75%",height:"70%"}} />
                </div>
            </div>
        )
    }

    return(
        <div className="home-dashboard">
        {detail?<Detail />:
        <div className="render-con">
            {
                list.map((item,idx)=>
                    <div onClick={()=>setDetail(idx+1)} className="home-render-item">
                        <div>{item.emp_id}</div>
                        <div>{item.name}</div>
                        <div>{item.department}</div>
                    </div>
                )
            }
        </div>}  
        </div>
    )
}

export default RenderList;