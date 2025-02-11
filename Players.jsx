import { useState, useEffect } from "react";



const Players = () => {
  const [players, singlePlayers] = useState([])
  
    useEffect(() => {
      const getPuppies = async () => {
        const Puppies = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-FT/players')
        const allPuppies = await Puppies.json();

        console.log(allPuppies);
        const pups = allPuppies.data.players
        console.log(pups)

      }
      getPuppies();
    }, [])
  


  return (
    <>
      <h1>Players</h1>
      <ol>



        {Players.legnth > 0 ?
          Players.map((player) => (

            <li key={player.id}>{player.name}</li>
        )
        ):[]
      }
      </ol>
    </>
  )
}






export default Players