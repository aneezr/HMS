import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import OpacityIcon from '@mui/icons-material/Opacity';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

import {Chart as ChartJS,Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement,ArcElement} from 'chart.js';
ChartJS.register(Tooltip,Title,LineElement,Legend,CategoryScale,LinearScale,PointElement,ArcElement)


export default function DoughnutChart({type,d}){

    const data = type?{
        labels: [
          'Oxygen level'
        ],
        datasets: [{
          label: 'Oxygen level',
          data: [d, 100-d],
          backgroundColor: [
            '#ffa500',
            '#e1e1e1'
          ],
          hoverOffset: 4
        }]
    }:{
        labels: [
          'Water balance'
        ],
        datasets: [{
          label: 'Water balance',
          data: [d, 100-d],
          backgroundColor: [
            '#74ccf4',
            '#e1e1e1'
          ],
          hoverOffset: 4
        }]
    };
    const options ={
      //inner circle radius
      cutout : "75%",
      plugins:{
        legend: {
         display: false
        }
       }
    }

    const style = {
        doughnutCon :{
            height:'200px',
            width:"200px",
            //border:"5px solid black",
            position:"relative",
            display:"flex",
            backgroundColor:"#ffffff",
            borderRadius:"10px",
            padding:"20px"
        },
        label:{
          position:"absolute",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          //border:"5px solid black",
          alignItem:"center",
          top:"18%",
          right:"50%",
          textAlign:"center",
          transform: "translate(50%, 50%)",
          fontWeight:"700",
          fontSize:"55px",
          color:'#660066'
        }
    }   

  return(
    <div style={style.doughnutCon}>
      <Doughnut data={data} options={options} /> 
      <div style={style.label}>
            {type?<DirectionsRunIcon style={{fontSize:"65px",color:'#ffa500'}} />:<OpacityIcon style={{fontSize:"65px",color:'#74ccf4'}} />}
      </div>
    </div>
  )
}