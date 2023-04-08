import React from 'react'
import "./../../src/Square.css"
import Minesweeper from './Minesweeper'
import { useState } from 'react'


// We need to use all the possible state for each square "field"
// field keeps track of rock, bomb, gold
// fieldValue keeps track of the emoji 
// isClicked keeps track of which field was clicked

export default function Square(props) {
    const [field, setField] = useState((props) => {

        const possibleValues = ["bomb", "bomb", "bomb"
            , "gold", "gold", "gold", "gold", "gold", "gold",
            "empty", "empty", "empty",
            "empty", "empty", "empty",
            "empty", "empty", "empty",
            "empty", "empty", "empty",
            "empty", "empty", "empty",
            "empty"];
        const randomIndex = Math.floor(Math.random() * possibleValues.length);

        return possibleValues[randomIndex];
    });
    // console.log(field)

    const [fieldValue, setFieldValue] = useState("")

    const [isClicked, setisClicked] = useState(false)

    function handleClick(props) {
        setisClicked(true)
        console.log(typeof field)
        if (field === "empty") {
            setFieldValue('🪨')
        } else if (field === "gold") {
            setFieldValue('💰')
        } else if (field === "bomb") {
            setFieldValue('💣')
        }



    }
    return (
        <button className='square' onClick={() => { handleClick() }}>{fieldValue}</button>
    )
}
