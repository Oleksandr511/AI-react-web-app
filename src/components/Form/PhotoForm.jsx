import React, { useState } from 'react'

const PhotoForm = ({onFileSelected}) => {

    const [file, setFile] = useState()

    const handlePhoto = (e) => {
        console.log(e.target.files);
        const  fileUrl = URL.createObjectURL(e.target.files[0]);
        onFileSelected(fileUrl);
    }
    return (
        <div>
            
                <label>Upload image</label>
                <input accept="image/*" type="file" onChange={handlePhoto}/>
            
            {/* {file && <img src={file} alt="Preview"/>} */}
        </div>
    )
}

export default PhotoForm