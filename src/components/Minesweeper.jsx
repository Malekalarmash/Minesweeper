import React from 'react'
import Square from './Square'
import { useState } from 'react'

export default function Minesweeper(props) {
    const [isWinner, setIsWinner] = useState(false)
    const [count, setCount] = useState(0)
    const getWinner = (field) => {

        if (field == "bomb") {
            setIsWinner(false)
            console.log('Game OVer')
        } else {
            console.log("Winner")
        }
    }




    return (
        <div className='continer'>
            <div className='row'>
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
            <div className='row'>
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
            <div className='row'>
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
            <div className='row'>
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
            <div className='row'>
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>

        </div >
    )
}
