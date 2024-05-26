import React, { useState } from 'react'
import useTelegram from '../../hooks/useTelegram';

const Form = () => {
    const [text, setText] = useState('')
    const {user, tg} = useTelegram()
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            message: text,
            userId: tg.initDataUnsafe?.user?.id
        }
        tg.sendData(JSON.stringify(data))
        console.log(JSON.stringify(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter text
                    <input
                        type='text'
                        value={text}
                        onChange={(e => setText(e.target.value))}
                    />
                </label>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Form