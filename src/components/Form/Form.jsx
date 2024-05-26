import React, { useCallback, useEffect, useState } from 'react'
import useTelegram from '../../hooks/useTelegram';

const Form = () => {
    const [text, setText] = useState('')
    const {user, tg} = useTelegram()
    const [result, setResult] = useState('')

    const onSendData = useCallback(() => {
        const data = {
            text
        }
        tg.sendData(JSON.stringify(data))
    }, [])

    useEffect(()=> {
        tg.onEvent('mainButtonClicked', callback)
        return () => {
            tg.offEvent('mainButtonClicked', callback)
        }
    },[])

    useEffect(()=> {
        tg.MainButton.setParams({
            text: 'Send data'
        })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            message: text,
            userId: tg.initDataUnsafe?.user?.id
        }
        tg.sendData(JSON.stringify(data))
        setResult(JSON.stringify(data))
        //console.log(JSON.stringify(data))
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
            <label>{result}</label>
        </div>
    )
}

export default Form