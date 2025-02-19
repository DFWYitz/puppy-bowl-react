//must export props/links/routes/route
//possibly useNv usestate useeffect 
//useState to store info from fetches

import { Routes, Route, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Players from "./Players"
import SinglePlayer from "./SinglePlayer"



const App = () => {
  //useeffect 
  //fetch api
  //select info to store
  //puppy, owner, team, 
  //const[puppyData, setPuppyData] = useState ({
  //players:[],
  //teams: {}
  
  //const state = {
  // pups: [],



  return (
    <>
      

      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="Players" element={<Players />} />
        {/* <Route path="SinglePlayer" element={<SinglePlayer/>}/> */}
        <Route path="SinglePlayer/:id" element={<SinglePlayer />} />
      </Routes>

      <Link to="/">HomePage</Link>
      <Link to="Players">Players</Link>
      <Link to="SinglePlayer" >SinglePlayer </Link>

    </>
    //onClick 
    //onSubmit for back buttons 
    //onChange for puppies added 

  )
}

export default App

