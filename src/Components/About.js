import React from 'react'

function About() {
  return (
    <div className="p-7 text-1xl font-semibold flex-1 h-screen bg-center text-white">
        <h1 className="text-2xl">Het team:</h1><br />
        <div>
        <table>
          <thead>
            <tr>
              <th className="bg-stone-700">Naam</th>
              <th className="bg-stone-700">Taak</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-stone-400">
                <td>Dende</td>
                <td>Game</td>
            </tr>
            <tr className="hover:bg-stone-400">
                <td>Sander</td>
                <td>Game/Database</td>
            </tr >
            <tr className="hover:bg-stone-400">
                <td>Rafael</td>
                <td>Website</td>
            </tr >
            <tr className="hover:bg-stone-400">
                <td>Bram</td>
                <td>Website/Database</td>
            </tr>
          </tbody>
	      </table>
        </div>
    </div>
  )
}

export default About