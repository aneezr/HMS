import React,{useState,useEffect} from "react"
import DoughnutChart from "./Doughnut"
import HeartRate from "./HeartRate"

import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import VaccinesIcon from '@mui/icons-material/Vaccines';


const PatientView = ({hid,uid}) => {

    const[temp,setTemp] = useState(36);
    const[o,setO] = useState(114);
    const[hr,setHr] = useState(102);
    const[heartRateList,setHeartRateList] = useState([]);


    useEffect(()=>{
        const socket = new WebSocket("ws://localhost:8001/phms/connect/webapp/"+{hid}+"&"+{uid})
        socket.onopen = ()=> {console.log("opened")}
        socket.onclose = ()=>{console.log("closed")}
        socket.onmessage = (e)=> {
            console.log(typeof(e));
            var data = JSON.parse(e.data);
            console.log(data.body_temp);
            setTemp(data.body_temp);
            setO(data.o2_lvl);
            setHr(data.heart_rate);
            setHeartRateList([...heartRateList,data.heart_rate])
        }
    },[])


    const style={
        meter:{
            display:"flex",
            alignItems:"center",
            justifyContent:'center',
            fontSize:"25px"
        }
    }
    return(
        <div className="home-dashboard">
            <div className="p-view-con">
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    <div className="p-view-row1-item">
                        <div style={style.meter}><MonitorHeartIcon style={{fontSize:"40px",color:"#FE5F44"}} /><div style={{color:"#FE5F44"}}>{hr} bpm</div></div>
                        <div style={{fontSize:"20px",fontWeight:"500"}}>Heart rate</div>
                        <div style={{fontSize:"13px",color:"grey"}}>Pulse is the most important physiological indicator</div>
                    </div>
                    <div className="p-view-row1-item">
                        <div style={style.meter}><DeviceThermostatIcon style={{fontSize:"40px",color:"blue"}}/><div style={{color:"blue"}}>{temp} C</div></div>
                        <div style={{fontSize:"20px",fontWeight:"500"}}>Tempreture</div>
                        <div style={{fontSize:"13px",color:"grey"}}>Tempreture below 35 indicates serious illness</div>
                    </div>
                    <div className="p-view-row1-item">
                        <div style={style.meter}><BloodtypeIcon style={{fontSize:"40px",color:"	#660000"}} /><div style={{color:"#660000"}}>120 / 80</div></div>
                        <div style={{fontSize:"20px",fontWeight:"500"}}>Blood Pressure</div>
                        <div style={{fontSize:"13px",color:"grey"}}>Blood pressure can rise and fall serveral times a day</div>
                    </div>
                    <div className="p-view-row1-item">
                        <div style={style.meter}><VaccinesIcon style={{fontSize:"40px",color:"#DDC82F"}} /><div style={{color:"#DDC82F"}}>90 mg/dl</div></div>
                        <div style={{fontSize:"20px",fontWeight:"500"}}>Glucose</div>
                        <div style={{fontSize:"13px",color:"grey"}}>The normal concentrationm of glucose is between 80-120 mg/dl</div>
                    </div>
                </div>
                <div className="p-view-con-row2">
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <div className="p-view-con-row2-item">
                            <div>
                                <DoughnutChart type={1} d={o} />
                            </div>
                            <div style={{width:"12vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"20px",fontWeight:"500"}}>
                                <div>Oxygen Level</div>
                                <div style={{fontSize:"35px",color:"#ffa500"}}>{o}%</div>
                                <div style={{fontSize:"15px",fontWeight:"400"}}>10% less than last week</div>
                            </div>
                        </div>
                        <div className="p-view-con-row2-item">
                            <div>
                                <DoughnutChart type={0} d={12} />
                            </div>
                            <div style={{width:"12vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"20px",fontWeight:"500"}}>
                                <div>Water balance</div>
                                <div style={{fontSize:"35px",color:"#74ccf4"}}>12%</div>
                                <div style={{fontSize:"15px",fontWeight:"400"}}>5% higher than last week</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <HeartRate heartRateList={heartRateList} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PatientView;