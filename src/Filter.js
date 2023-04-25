import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Filter({movies}) {
const handleSearch=(e)=>{
  e.preventDefault()

}
const[search, setSearch]= useState('')

  return (
    <div style={{justifyContent:"center", textAlign:"center"}} >
    
        <form onSubmit={handleSearch}> 
            <input onChange={(e)=> setSearch(e.target.value)}/>
            <Button variant="primary"> search movie</Button>

        </form>
        
    </div>
  )
}

export default Filter