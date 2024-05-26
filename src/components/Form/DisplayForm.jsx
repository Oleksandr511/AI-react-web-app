import React, { useState } from 'react'
import PhotoForm from './PhotoForm'

const  DisplayForm = () => {
   const [photo, setPhoto] = useState(null)
  return (
    <div>
        <PhotoForm onFileSelected={setPhoto}/>
        {photo && <img src={photo} height={50} width={50} alt="Preview"/>}
    </div>
  )
}

export default DisplayForm