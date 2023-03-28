import { useEffect, useState } from 'react'
import './App.css'
import GetItemRandom from './assets/components/GetItemRandom'
import db_space from './assets/db/db_space.json'
import Buttom from './assets/components/Button'
import db_fortune from './assets/db/db_fortune.json'
import GetInfoFortune from './assets/components/GetInfoFortune'
import Buttom_fortune from './assets/components/Button__fortune'



function App() {

  
  const getItemRandom = (db) => {
    const indiceRandom = Math.floor(Math.random() * db.length)
    return db[indiceRandom]
  }
  const [infoSpace, setInfo] = useState(getItemRandom(db_space))

  const [infoFortune, setInfoFortune] = useState(getItemRandom(db_fortune)) //info fortune

  const [bg, setBg] = useState(Math.floor(Math.random() * 4 + 1))

  const change = ()=>{
    
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

  const change2 = ()=>{
    setInfoFortune (getItemRandom(db_fortune))
    setBg(Math.floor(Math.random() * 4 + 1))

    //  const newInfoFortune = GetItemRandom(db_fortune)

    // if(infoFortune !== newInfoFortune) {
    //      setInfoFortune (newInfoFortune)
    //     setBg(Math.floor(Math.random() * 4 + 1))
    //  }
    // else if(infoFortune === 0 && newInfoFortune === 0) { 
    //   setInfoFortune (newInfoFortune + 1)
    //    setBg(Math.floor(Math.random() * 4 + 1))
    // }
    // else if(infoFortune === 10 && newInfoFortune === 3) { 
    //    setInfoFortune (newInfoFortune - 1)
    //    setBg(Math.floor(Math.random() * 4 + 1))
    // }
  }

  const [infoPrint, setInfoPrint] = useState(false)

  const [bgChange, setBgChange] = useState(false)

  // const changeBg = () => {
  //   setBgChange(!bgChange)
  //   setInfoPrint(!infoPrint)
  // }

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
        <h1 className='title__principal'>What are you interested in?</h1>
        <div className='button-container'>
          <div className='label__container'>
            <button onClick={OnSpace} className={`button__goSpace hidde${buttonHome}`}id='bo' ></button>
            <label htmlFor="bo" className={`label hidde${buttonHome}`}><b> Space</b></label>
          </div>
          <div className='label__container'>
            <button onClick={OnFortune} className={`button__goFortune hidde${buttonHome}`} id='bu'></button>
            <label htmlFor='bu' className={`label hidde${buttonHome}`}><b>Fortune cookie</b></label>
          </div>
        </div>
      </div>
      
      <button onClick={OnPrincipal} className='cambio__tema'>Change interest</button>
     { infoPrint ? <section> <GetItemRandom info={infoSpace}/>
      <Buttom change={change} bg = {setBg}/> </section> : <section> <GetInfoFortune info={infoFortune}/>
      <Buttom_fortune change={change2} bg = {setBg}/> </section>
     }

     
    </div>
  )
}

export default App
