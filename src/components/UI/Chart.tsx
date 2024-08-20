import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,  // Регистрация элемента Arc
    Tooltip,
    Legend,
    Title
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ data }) => {
    
    console.log(data);
    

    const pieChartData = {
        labels: ["Расходы", "Цели", "Доходы"],
        datasets: [{
            data: data,
            label: "Рубли",
            backgroundColor: ["#AAD977", "#F5878A", "#ff6600"],
            hoverBackgroundColor: ["#175000", "#003350", "#993d00"]
        }]
    };
    const pieChart = (
        data.length === 0 ? (
            <h1>Нету данных для ваших подсчетов</h1>
        ) : (
            <div style={{ width: "300px", height: "300px" }}>
            <Doughnut
              type="doughnut"
              width={10}
              height={10}
              data={pieChartData}
            />
          </div>
        )
    );
return pieChart;
};
export default Chart;