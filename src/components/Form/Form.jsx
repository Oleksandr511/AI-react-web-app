import React, { useState } from 'react'

const Form = () => {
    const [text, setText] = useState('')
    return (
        <div>
            <form>
                <label>Enter text
                    <input
                        type='text'
                        value={text}
                        onChange={(e => setText(e.target.value))}
                    />
                </label>
            </form>
        </div>
    )
}

export default Form