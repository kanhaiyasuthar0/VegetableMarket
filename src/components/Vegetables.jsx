import React, { useState } from 'react'


function Vegetables() {
    const [Tcount , setTcount] = useState(10)
    const [Pcount , setPcount] = useState(8)
    const [Ccount , setCcount] = useState(5)
    const [Ocount , setOcount ] = useState(7)
    
    const handleT = (val)=>{
        setTcount(Tcount + val)
    }
    const handleP = (val)=>{
        setPcount(Pcount + val)
    }
    const handleC = (val)=>{
        setCcount(Ccount + val)
    }
    const handleO = (val)=>{
        setOcount(Ocount + val)
    }
  return (
      <>    

      <div className='parent'>


    <h1   >Vegetables</h1>
    <div >

    <h3> Tomatoes - { Tcount } Kgs</h3>
    <button onClick={()=>handleT(+1)}>+</button>
    <button onClick={()=>handleT(-1)}>-</button>
    </div>
    <div>
    <h3> Potatoes - { Pcount } Kgs</h3>
    <button onClick={()=>handleP(+1)}>+</button>
    <button onClick={()=>handleP(-1)}>-</button>
    </div>

    <div>

    <h3> Carrots - { Ccount } Kgs</h3>
    <button onClick={()=>handleC(+1)}>+</button>
    <button onClick={()=>handleC(-1)}>-</button>
    </div>
  

    <div>
    <h3> Onions - { Ocount } Kgs</h3>
    <button onClick={()=>handleO(+1)}>+</button>
    <button onClick={()=>handleO(-1)}>-</button>
    </div>
      </div>

      </>
  )
}

export default Vegetables