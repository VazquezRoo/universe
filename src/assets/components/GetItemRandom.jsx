import React from 'react'

function GetItemRandom({info}) {

  return (
      <section>
        <h3 className='contenido titulo space'>Space</h3>
        <div className='centro'>
        <div className='centro__background space'></div>
        <article className='contenido phrase space'>{info.phrase}</article>      
        <article className='contenido author space'>{info.author}</article>
        </div>
      </section>
 
  )
}

export default GetItemRandom