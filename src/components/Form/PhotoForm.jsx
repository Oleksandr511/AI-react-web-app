import React, { useState } from 'react'

const PhotoForm = () => {

    const [file, setFile] = useState()

    const handlePhoto = (e) => {
        console.log(e?.target?.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <div>
            
                <label>Upload image</label>
                <input accept="image/*" type="file" onChange={handlePhoto}/>
            
            <img src={file}/>
        </div>
    )
}

export default PhotoForm