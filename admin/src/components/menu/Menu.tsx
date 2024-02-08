import "./menu.scss"
import { Link } from "react-router-dom"
import {menu}  from '../../data'

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item)=>(
        <div className="item">
          <span className="title">{item.title}</span>
          {item.listItems.map((listitem)=>(
            <Link to={listitem.url} className="listItems">
              <img src={listitem.icon} alt="" />
              <span>{listitem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Menu