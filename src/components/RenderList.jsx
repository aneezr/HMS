import React,{useState,useEffect} from 'react'

import PatientView from "./PatientView"

import img from "C:/Users/HP/OneDrive/Pictures/car.png"

const RenderList = ({type,at}) =>{

    const[detail,setDetail] = useState(0)
    const[list,setList] = useState([])

    useEffect(()=>{
        const options ={
            method:"GET",
            headers:{
                "Authorization": "Bearer "+{at},
                "accept": "application/json",
                "Content-Type": "application/json"
            }
        }
        fetch("http://localhost:8000/patientget/user/list/",options)
            .then((res)=>{console.log(res);res.json()})
            .then((data)=>console.log(data))
            .catch((e)=>console.log(e))
    },[])

    const Detail = () =>{
        return(
            <div className='detail-con'>
                <div className='details'>
                    <div className="home-render-item">Name : Aneez Rahman</div>
                    <div className="home-render-item">Age : 22</div>
                    <div className="home-render-item">University : ASIET</div>
                    <div className="home-render-item">Experience : 20</div>
                    <div className="home-render-item" style={{background:"red",color:"white"}} onClick={()=>{setDetail(0)}}>Back</div>
                </div>
                <div className='detail-img'>
                    <img src={img} style={{width:"75%",height:"70%"}} />
                </div>
            </div>
        )
    }

    return(
        <div className="home-dashboard">
        {detail?type==="patients"?<PatientView />:<Detail />:
        <div className="render-con">
            <div onClick={()=>setDetail(1)} className="home-render-item">
                <div>103</div>
                <div>Aneez Rahman</div>
                <div>Active</div>
            </div>
            <div className="home-render-item">
                <div>103</div>
                <div>Ajmal Ali</div>
                <div>Active</div>
            </div>
            <div className="home-render-item">
                <div>103</div>
                <div>KM Ali</div>
                <div>Active</div>
            </div>
        </div>}  
        </div>
    )
}

export default RenderList;