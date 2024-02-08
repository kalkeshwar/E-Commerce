import "./home.scss"
import TopDeal from "../../components/topDealsBox/TopDeal"
import LineChartBox from "../../components/linechartbox/LineChartBox"
import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data"

const Home = () => {
  return (
    <div className="home">
      <div className=" box box1"><TopDeal/></div>
      <div className=" box box2"><LineChartBox {...chartBoxUser}/></div>
      <div className=" box box3"><LineChartBox {...chartBoxProduct}/></div>
      <div className=" box box4">box 4</div>
      <div className=" box box5"><LineChartBox {...chartBoxRevenue}/></div>
      <div className=" box box6"><LineChartBox {...chartBoxConversion}/></div>
      <div className=" box box7">box 7</div>
      <div className=" box box8">box 8</div>
      <div className=" box box8">box 8</div>
    </div>
  )
}

export default Home