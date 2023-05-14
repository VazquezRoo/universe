import React from 'react'

function GetItemRandom({info,change,bg}) {

  

  return (
      <section className='padre_space'>
        <h3 className='contenido titulo space'>Space</h3>
        <div className='container_planet'>
        <article className='centro__background space'>
          <img src="/src/assets/images/planeta.png" alt="" className='planet' />
        <p className='contenido phrase space'>{info.phrase}</p>      
        <span className='contenido author space'>{info.author}</span>
        </article>
        </div>
        <button onClick={change} className={`img${bg} buttom__space` } >Know more</button>
      </section>
 
  )
}

export default GetItemRandom