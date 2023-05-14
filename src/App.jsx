import { useEffect, useState } from 'react'
import './App.css'
import GetItemRandom from './assets/components/GetItemRandom'
import db_space from './assets/db/db_space.json'
import db_fortune from './assets/db/db_fortune.json'
import GetInfoFortune from './assets/components/GetInfoFortune'



function App() {

  //funcion obtener numero random para colocar bg y frase random de la bd
  
  const getItemRandom = (db) => {
    const indiceRandom = Math.floor(Math.random() * db.length)
    return db[indiceRandom]
  }


  const [infoSpace, setInfo] = useState(getItemRandom(db_space))//info space

  const [infoFortune, setInfoFortune] = useState(getItemRandom(db_fortune)) //info fortune

  const [bg, setBg] = useState(Math.floor(Math.random() * 4 + 1)) //obtener bg de inicio random

  const changeSpace = ()=>{
    
    const newInfo = getItemRandom(db_space)

      if(infoSpace !== newInfo) {
          setInfo (newInfo)
          setBg(Math.floor(Math.random() * 4 + 1))
      }
      else if(infoSpace === 0 && newInfo === 0) { 
        setInfo (newInfo + 1)
        setBg(Math.floor(Math.random() * 4 + 1))
      }
      else if(infoSpace === 10 && newInfo === 3) { 
        setInfo (newInfo - 1)
        setBg(Math.floor(Math.random() * 4 + 1))
      }
  }

  const changeFortune = ()=>{
    
    const newInfo = getItemRandom(db_fortune)

      if(infoFortune !== newInfo) {
          setInfoFortune (newInfo)
          setBg(Math.floor(Math.random() * 4 + 1))
      }
      else if(infoFortune === 0 && newInfo === 0) { 
        setInfoFortune (newInfo + 1)
        setBg(Math.floor(Math.random() * 4 + 1))
      }
      else if(infoFortune === 10 && newInfo === 3) { 
        setInfoFortune (newInfo - 1)
        setBg(Math.floor(Math.random() * 4 + 1))
      }
  }

 

  const [infoPrint, setInfoPrint] = useState(false)

  const [bgChange, setBgChange] = useState(false)

  

    const [principal, setPrincipal] = useState('On')
    
    const [buttonHome, setButtonHome] = useState('On')
    
    const OnSpace = () => {
      setPrincipal('Off')
      setInfoPrint(true)
      setBgChange(true)
      setButtonHome('Off')
    }
    const OnFortune = () => {
      setPrincipal('Off')
      setInfoPrint(false)
      setBgChange(false)
      setButtonHome('Off')
    }

    const OnPrincipal = () =>{
      setPrincipal('On')
      setButtonHome('On')
    }
  


  return (
    <div className={`App ${bgChange ? `bg${bg}` : `bg__fortune${bg}` }`} >
      <div className={`principal${principal}`}>
        <h1 className='title__principal'><p className='text__title'> What are you interested in?</p></h1>

        <div className='label__container'>
            <button onClick={OnSpace} className={`button__goSpace hidde${buttonHome}`}id='bo' ></button>
            <label htmlFor="bo" className={`label hidde${buttonHome}`}><b> Space</b></label>
        </div>

        <div className='label__container'>
            <button onClick={OnFortune} className={`button__goFortune hidde${buttonHome}`} id='bu'></button>
            <label htmlFor='bu' className={`label hidde${buttonHome}`}><b>Fortune cookie</b></label>
        </div>
      </div>
      
      <button onClick={OnPrincipal} className='cambio__tema'>Change interest</button>
     { infoPrint ?
      <section> <GetItemRandom info={infoSpace} change={changeSpace} bg = {setBg}/> </section> : 
      <section> <GetInfoFortune info={infoFortune} change={changeFortune}  bg = {setBg}/>
     </section>
     }

     
    </div>
  )
}

export default App
