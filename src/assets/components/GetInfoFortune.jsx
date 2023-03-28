import React from 'react'

function GetInfoFortune({info}) {
  return (
    <section>
    <h3 className='contenido titulo fortune'>Fortune cookie</h3>
    <div className='centro fortune'>
    <div className='centro__background fortune'></div>
    <article className='contenido phrase fortune'>{info.phrase}</article>      
    <article className='contenido author fortune'>{info.author}</article>
    </div>
  </section>
  )
}

export default GetInfoFortune