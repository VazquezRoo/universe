import { useState } from 'react'
import './App.css'
import GetItemRandom from './assets/components/GetItemRandom'
import db_space from './assets/db/db_space.json'
import Buttom from './assets/components/buttom'



function App() {

  
  const getItemRandom = (db) => {
    const indiceRandom = Math.floor(Math.random() * db.length)
    return db[indiceRandom]
  }
  const [infoSpace, setInfo] = useState(getItemRandom(db_space))

  const [bg, setBg] = useState(Math.floor(Math.random() * 4 + 1))

  const change = ()=>{
    
    const newInfo = getItemRandom(db_space)

    if(infoSpace !== newInfo) {
        setInfo (newInfo)
        setBg(Math.floor(Math.random() * 4 + 1))
     }
    else if(infoSpace === 0 && newInfo === indice) { 
       setInfo (newInfo + 1)
       setBg(Math.floor(Math.random() * 4 + 1))
    }
    else if(infoSpace === 10 && newInfo === indice) { 
       setInfo (newInfo - 1)
       setBg(Math.floor(Math.random() * 4 + 1))
    }
  }

  return (
    <div className={`App bg${bg}`} >
      <GetItemRandom info={infoSpace}/>
      <Buttom change={change} bg = {setBg}/>
    </div>
  )
}

export default App
