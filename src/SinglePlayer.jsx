import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SinglePlayer =()=>{
  const params = useParams()
  console.log (params)

   const [singlePlayer, setSinglePlayer] = useState({})
    
      useEffect(() => {
        const getSinglePlayer = async () => {
          const singlePlayerResponse = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-FT/players/${params.id}`)
          const playerDetails = await singlePlayerResponse.json();
  
          console.log(playerDetails);
          //const pups = allPuppies.data.players
          //console.log(pups)
          setSinglePlayer(playerDetails.data.player)
        }
        getSinglePlayer();
      }, []);
    
  return (<><h1>Single Player</h1><>
    <div>{params.id}</div>
    <div>{singlePlayer.name}</div>
    <div>{singlePlayer.status}</div>
    <div>{singlePlayer.cohortId}</div>
    <div>{singlePlayer.imageUrl}</div>
  </></>



  )
}
//   const singlePup =()=>{

//   }
// }


export default SinglePlayer