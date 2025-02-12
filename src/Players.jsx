import { useState, useEffect } from "react";
import { Link, useHref } from "react-router-dom";



const Players = () => {
  const [players, setPlayers] = useState([])
  
    useEffect(() => {
      const getPuppies = async () => {
        const Puppies = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-FT/players')
        const allPuppies = await Puppies.json();

        console.log(allPuppies);
        const pups = allPuppies.data.players
        console.log(pups)
        setPlayers(pups)
      }
      getPuppies();
    }, [])
  


  return (
    <>
      <h1>Players</h1>
      <ol>



        {players &&(

          players.map((player) => (
            <div>
            <li key={player.id}>{player.name}</li> 
            <button onClick={()=>window.location.href=`/SinglePlayer/${player.id}`}>Click me for Deets</button>
            </div>
          )
        )
      )
      }
      </ol>
    </>
  )
}






export default Players