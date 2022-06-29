import React,{useState,useEffect} from "react"

import PersonIcon from '@mui/icons-material/Person';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ListIcon from '@mui/icons-material/List';

import DashBoard  from "./Dashboard";
import Notify from "./Notify";
import Calender from "./Calender";
import RenderList from "./RenderList";
import Patient from "./Patient";
import LogoutIcon from '@mui/icons-material/Logout';

import { Routes, Route, Link,useLocation,Navigate } from "react-router-dom";

const Home = ({setIsLoggedIn,setAt,at,user}) => {

    const [cal,setCal] = useState(0);
    const [profile,setProfile] = useState(0);

    const [noti,setNoti] = useState([]);

    useEffect(()=>{
        const socket = new WebSocket("ws://localhost:8001/phms/connect/webapp/notification/"+user.id)
        socket.onopen = ()=> {console.log("opened")}
        socket.onclose = ()=>{console.log("closed")}
        socket.onmessage = (e)=> {
            var data = JSON.parse(e.data);
            console.log(data.content);
            setNoti([...noti,data.content]);
        }
    },[])

    const { pathname } = useLocation()
    let split_path = pathname.split('/')
    let path = ''
    if(split_path.length > 1) {
        path = split_path[1]
       
    }
    
    return(
        <div className="home-main">
            <div className="main-header">
            <Link to="/home"><div className="logo">Health Management System</div></Link>
                <div className="home-header-buttons-con">
                    <Link to="/home"><div className={pathname === '/home'?"home-header-buttons active":"home-header-buttons"}>Home</div></Link>
                    <Link to="/doctors"><div className={pathname === '/doctors'?"home-header-buttons active":"home-header-buttons"}>Doctors</div></Link>
                    <Link to="/nurses"><div className={pathname === '/nurses'?"home-header-buttons active":"home-header-buttons"}>Nurses</div></Link>
                    <Link to="/patients"><div className={pathname === '/patients'?"home-header-buttons active":"home-header-buttons"}>Patients</div></Link>
                </div>
                <div className="home-header-icons-con">
                    <PersonIcon className="home-header-icons" onMouseEnter={()=>setProfile(1)} onMouseLeave={()=>setProfile(0)} />
                    <div className={profile?"profile-drop":"profile-drop-hidden"} onMouseEnter={()=>setProfile(1)} onMouseLeave={()=>setProfile(0)}>
                        <div>{user.name}</div>
                        <div>{user.type}</div>
                        <div>{user.email}</div>
                    </div>
                    <LogoutIcon onClick={()=>{setIsLoggedIn(0);setAt("");}} className="home-header-icons" />
                </div>
            </div>
            <div className="home-body">
                <Routes>
                    <Route path="/" element={<Navigate replace to="/home" />} />
                    <Route path="/home" element={<DashBoard />} />
                    <Route path="/doctors" element={<RenderList type='doctors' at={at}  />} />
                    <Route path="/nurses" element={<RenderList type='nurses' at={at}  />} />
                    <Route path="/patients" element={<Patient type='patients' at={at} />} />
                </Routes>
                <div className="notify-con">
                    <div className="notify-con-toggle">
                        <div onClick={()=>setCal(1)} className={cal?"notify-con-toggle-active":""}>Calender</div>
                        <div onClick={()=>setCal(0)} className={cal?"":"notify-con-toggle-active"}>Notifications</div>
                    </div>
                    {cal?<Calender />:<Notify noti={noti} />}
                </div>
            </div>
        </div>
    )
}

export default Home;