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
        const possibleValues = ["bomb", "gold", "rock", "empty"];
        const randomIndex = Math.floor(Math.random() * possibleValues.length);
        return possibleValues[randomIndex];
    });

    const [fieldValue, setFieldValue] = useState(() => {

        if (props.randomIndex === "empty") {
            setFieldValue('🪨')
        } else if (props.randomIndex === "gold") {
            setFieldValue('💰')
        } else if (props.randomIndex === "bomb") {
            setFieldValue('💣')
        }
    }
    )
    const [isClicked, setisClicked] = useState(false)

    function handleClick() {
        setisClicked(true)
        setField(props.randomIndex)
        console.log(props.randomIndex)

        if (props.randomIndex === "empty") {
            setFieldValue('🪨')
        } else if (props.randomIndex === "gold") {
            setFieldValue('💰')
        } else if (props.randomIndex === "bomb") {
            setFieldValue('💣')
        }



    }
    return (
        <button className='square' onClick={() => { handleClick() }}>{fieldValue}</button>
    )
}
