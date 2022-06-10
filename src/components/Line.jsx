import React from 'react';

import {Line} from 'react-chartjs-2';
import {Chart as ChartJS,Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement} from 'chart.js';
ChartJS.register(Tooltip,Title,LineElement,Legend,CategoryScale,LinearScale,PointElement)

export default function LineChart(){

    const labels = ["1 Dec","8 Dec","16 Dec","31 Dec",]
    const dataLine = {
        labels: labels,
        datasets: [{
          label: 'Doctors',
          data: [10, 15, 50, 80],
          fill: false,
          borderColor: 'orange',
          tension: .5 //for curviness of the line
        },
        {
            label: 'Patients',
            data: [200, 115, 100, 200],
            fill: false,
            borderColor: 'green',
            tension: .5 //for curviness of the line
          }],
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
      width:"100%",
      height:"95%",
      paddingTop:"10px",
    }
    }
    return(
        <div style={style.LineCon}>
          <Line data={dataLine} options={options} />
        </div>
    )
}