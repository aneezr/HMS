import React,{useEffect} from 'react';

import {Line} from 'react-chartjs-2';
import {Chart as ChartJS,Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement} from 'chart.js';
ChartJS.register(Tooltip,Title,LineElement,Legend,CategoryScale,LinearScale,PointElement)

export default function HeartRate({heartRateList}){

    const labels = ["12:30:51pm","12:30:52pm","12:30:53pm","12:30:54pm","12:30:55pm","12:30:56pm","12:30:57pm","12:30:58pm"]
    const dataLine = {
        labels: labels,
        datasets: [{
          label: 'Heart rate',
          data: heartRateList.length <= 8?heartRateList:heartRateList.slice(-8),
          fill: false,
          borderColor: 'red',
          tension: .2 //for curviness of the line
        }]
    };

    const options = {
      scales: {
        x: {
          grid: {
            display:false
        }
       },
       y:{
        ticks: {
          stepSize: 50
          },
       }
      },
    };

    
  const style = {   
    LineCon :{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      width:"38vw",
      height:"49vh",
      margin:"10px 16px",
      paddingTop:"0px",
      background:"white",
      borderRadius:"10px"
    }
    }
    return(
        <div style={style.LineCon}>
          <Line data={dataLine} options={options} />
        </div>
    )
}