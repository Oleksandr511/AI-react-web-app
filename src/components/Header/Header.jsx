import React from 'react'
import Button from '../Button/Button'
import useTelegram from '../../hooks/useTelegram'

const Header = () => {
    const {tg,user,onClose} = useTelegram()
    
    return (
        <div>
            
            <Button onClick={onClose}>Close</Button>
            <span>{user?.username}</span>
        </div>
    )
}

export default Header