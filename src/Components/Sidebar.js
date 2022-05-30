import React, { useEffect, useState } from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import CastleIcon from '@mui/icons-material/Castle';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link} from "react-router-dom";
import "../App.css"




function SideBar() {

  const [open, setOpen] = useState(true);

  useEffect(() => {
    setInterval(() => {
      if (window.innerWidth <= 700){
        setOpen(false);
      }
    }, 1000)
  }, [])
  return (
    <div>
        <div className={`${open ? 'w-72' : "w-20"} 
        duration-300 h-screen p-5 pt-8 SideBarimge relative`}>

          <ArrowLeftIcon  className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 border-dark-gray rounded-full 
          bg-white  border-stone-600 ${!open && "rotate-180"}`}

          onClick={() => {
            if(window.innerWidth <=  700){
            }
            else{
              setOpen(!open)
            }
          
          }}
          />

          <Link to="/">
            <div className={`flex gap-x-4 items-center cursor-pointer p-2 hover:text-gold text-white border-b-2 border-transparent hover:border-gold`}>
              <CastleIcon className={` duration-300`}/>
              <h3 className={` origin-left font-medium text-x4 duration-300 ${!open && "scale-0"}`}>
                Home
              </h3>
            </div>
          </Link>
          <Link to="/Scoreboard">
            <div className="flex gap-x-4 items-center cursor-pointer hover:text-gold text-white p-2 border-b-2 border-transparent hover:border-gold">
              <SportsScoreIcon className={` duration-300`}/>
              <h3 className={`origin-left font-medium text-x4 duration-300 ${!open && "scale-0"}`}>
                Scoreboard
              </h3>
            </div>
          </Link>
          <Link to="/Team">
            <div className="flex gap-x-4 items-center cursor-pointer hover:text-gold text-white p-2 border-b-2 border-transparent hover:border-gold">
              <GroupsIcon className={` duration-300`}/>
              <h3 className={`origin-left font-medium text-x4 duration-300 ${!open && "scale-0"}`}>
                Team
              </h3>
            </div>
          </Link>
          
        </div>
    </div>
  )
}

export default SideBar