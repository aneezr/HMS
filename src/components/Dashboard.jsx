import React from "react";

import PeopleIcon from '@mui/icons-material/People';
import BedIcon from '@mui/icons-material/Bed';
import PollIcon from '@mui/icons-material/Poll';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import LineChart from "./Line";


const DashBoard = () =>{
    return(
        <div className="home-dashboard">
            <div className="home-dashboard-inner">
                <div style={{fontSize:"30px",fontWeight:"500",width:"95%",marginBottom:"25px"}}>Overview</div>
                <div style={{display:"flex",flexDirection:"row"}}>
                    <div style={{display:"flex",flexDirection:"column",marginLeft:"10px"}}>
                        <div style={{marginBottom:"10px"}}>Doctor's</div>
                        <div className="overview-con">
                            <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",width:"100%"}}>
                                <LocalHospitalIcon style={{fontSize:"80px",color:"#f5562a"}}  />
                                <div style={{display:"flex",alignItems:"center",justifyContent:"center",color:"green"}}><ShowChartIcon />80%</div>
                            </div>
                            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"}}>
                                <div>
                                    <div>Total doctors</div>
                                    <div>212</div> 
                                </div>

                                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <div><ArrowDropUpIcon />95</div>
                                    <div><ArrowDropDownIcon />25</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",marginLeft:"10px"}}>
                        <div style={{marginBottom:"10px"}}>Patient's</div>
                        <div className="overview-con">
                            <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",width:"100%"}}>
                                <PeopleAltIcon style={{fontSize:"80px",color:"#5f1ca3"}}  />
                                <div style={{display:"flex",alignItems:"center",justifyContent:"center",color:"#5f1ca3"}}><BarChartIcon />80%</div>
                            </div>
                            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"}}>
                                <div>
                                    <div>Total Patients</div>
                                    <div>570</div> 
                                </div>

                                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <div><ArrowDropUpIcon />95</div>
                                    <div><ArrowDropDownIcon />25</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",marginLeft:"10px"}}>
                        <div style={{marginBottom:"10px"}}>Reports</div>
                        <div className="overview-con">
                            <LineChart />
                        </div>
                    </div>
                </div>
                <div className="hosp-sur-con">
                    <div style={{fontSize:"25px",fontWeight:"500",width:"100%"}}>Hospital survey</div>
                    <div style={{display:"flex",flexDirection:"row",width:"100%"}} className="hosp-sur-inner">
                        <div className="hosp-sur-item">
                            <div><PeopleIcon style={{fontSize:"50px",color:"#58CD36"}} /></div>
                            <div>200</div>
                            <div style={{fontSize:"13px",color:"grey"}}>Total Patients</div>
                        </div>
                        <div className="hosp-sur-item">
                            <div><BedIcon style={{fontSize:"50px",color:"#660000"}} /></div>
                            <div>836</div>
                            <div style={{fontSize:"13px",color:"grey"}}>Number of bed</div>
                        </div>
                        <div className="hosp-sur-item">
                            <div><PollIcon style={{fontSize:"50px",color:"#bd00ff"}} /></div>
                            <div>120</div>
                            <div style={{fontSize:"13px",color:"grey"}}>Daily Surgery</div>
                        </div>
                        <div className="hosp-sur-item">
                            <div><AccessibilityNewIcon style={{fontSize:"50px",color:"#0078ff"}} /></div>
                            <div>653</div>
                            <div style={{fontSize:"13px",color:"grey"}}>New Patient</div>
                        </div>
                        <div className="hosp-sur-item">
                            <div><DriveFolderUploadIcon style={{fontSize:"50px",color:"#FE019A"}} /></div>
                            <div>138</div>
                            <div style={{fontSize:"13px",color:"grey"}}>Total stuff</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DashBoard;