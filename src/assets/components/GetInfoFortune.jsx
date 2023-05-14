import React from 'react'

function GetInfoFortune({info,change,bg}) {

  
  return (
    <section className='container_fortune'>
    <h3 className='contenido titulo fortune'>Fortune cookie</h3>
   
    <article className='centro__background fortune '>

    <p className='contenido phrase fortune'>{info.phrase}</p>      
    <span className='contenido author fortune'>{info.author}</span>

    </article>

    <button onClick={change} className={`img${bg} buttom__fortune` } >Open fortune cookie</button>
  </section>
  )
}

export default GetInfoFortune