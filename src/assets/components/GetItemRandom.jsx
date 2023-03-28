import React from 'react'

function GetItemRandom({info}) {

  return (
      <section>
        <h3 className='contenido titulo'>Space</h3>
        <div className='centro'>
        <div className='centro__background'></div>
        <article className='contenido phrase'>{info.phrase}</article>      
        <article className='contenido author'>{info.author}</article>
        </div>
      </section>
 
  )
}

export default GetItemRandom