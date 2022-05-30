import React, { useEffect } from 'react'
import RefreshIcon from '@mui/icons-material/Refresh';
import { useState } from 'react'
import "../App.css"
function Scoreboard() {
  const [ScoreData, setScoreData] = useState([
    {
      name: '',
      score: "",
    }
  ])
	useEffect(() => {
    
    fetch("http://127.0.0.1:5000/data").then((res) =>
    res.json().then((APIdata) => {
      setScoreData(APIdata)
      }))
   }, []);

  return (
    <div className="p-7 text-1xl font-semibold flex-1 h-screen bg-center text-white">
        <h1 className="text-2xl ">Scoreboard:</h1><br />
        <div>
        <table>
          <thead>
          <RefreshIcon className="refresh-button hover:duration-300 hover:rotate-360 " onClick={()=> {
              fetch("http://127.0.0.1:5000/data").then((res) =>
              res.json().then((APIdata) => {
                setScoreData(APIdata)
            }))
            }}/>
            <tr>
              <th className="bg-stone-700">Name</th>
              <th className="bg-stone-700">Score</th>
            
            </tr>
          </thead>
          <tbody>
            {ScoreData.map((item) =>{
              return (
                <tr className="hover:bg-stone-400">
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                </tr>
              )
            })}
          </tbody>
	      </table>
        </div>
    </div>
  )
}

export default Scoreboard