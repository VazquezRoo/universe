import React from 'react'

function Buttom_fortune({change, bg}) {

  return (
    
    <button onClick={change} className={`img${bg} buttom__fortune` } >Open fortune cookie</button>
  )
}

export default Buttom_fortune