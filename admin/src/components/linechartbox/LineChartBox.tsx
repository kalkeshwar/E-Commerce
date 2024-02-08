import "./linechartbox.scss"
import { Link } from "react-router-dom"
import { LineChart ,ResponsiveContainer,Line, Tooltip } from "recharts"
// import { chartBoxUser } from "../../data"

type Props={
  color: string;
  icon: string;
  title: string;
  number: number | string;
  dataKey: string;
  percentage: number;
  chartData: Object[];
}

const LineChartBox = (props:Props) => {
  return (
    <div className="chartbox">
      <div className="info">
        <div className="title">
          <img src={props.icon} alt="" />
          <span className="name">{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{color:`${props.color}`,padding:"5px"}}>
          view all
        </Link>
      </div>
      <div className="chartdivision">
        <div className="chart">
          <ResponsiveContainer width="99%" height={100}>
            <LineChart data={props.chartData}>
            <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 1, y: 70 }}
              />
              <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chartinfo">
          <span 
            className="percentage" 
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}>{props.percentage}%</span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  )
}

export default LineChartBox