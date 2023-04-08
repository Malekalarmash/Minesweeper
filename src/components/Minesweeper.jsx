import React from 'react'
import Square from './Square'
import { useState } from 'react'

export default function Minesweeper() {
    const [isWinner, setIsWinner] = useState(false)



    return (
        <div className='continer'>
            <div className='row'>
                <Square />
                <Square />
                <Square field="empty" />
                <Square field="empty" />
                <Square field="empty" />
            </div>
            <div className='row'>
                <Square field="empty" />
                <Square field="empty" />
                <Square field="empty" />
                <Square field="empty" />
                <Square field="empty" />
            </div>
            <div className='row'>
                <Square field="empty" />
                <Square field="empty" />
                <Square field="empty" />
                <Square field="empty" />
                <Square field="empty" />
            </div>
            <div className='row'>
                <Square field="empty" />
                <Square field="empty" />
                <Square field="empty" />
                <Square field="empty" />
                <Square field="empty" />
            </div>
            <div className='row'>
                <Square field="empty" />
                <Square field="empty" />
                <Square field="empty" />
                <Square field="empty" />
                <Square field="empty" />
            </div>

        </div >
    )
}
