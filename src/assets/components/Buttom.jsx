import React from 'react'

function Buttom({change, bg}) {

  return (
    
    <button onClick={change} className={`img${bg}`}>Know more</button>
  )
}

export default Buttom