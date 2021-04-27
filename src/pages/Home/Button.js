import React from 'react'
import {useHistory} from "react-router-dom"

const Button = () => {
    const history = useHistory()
    return (
        <div>
            <button
            onClick={()=>history.push("/")}
            >
                BACK
            </button>
            <button
            onClick={()=>history.push("/home")}
            >
                GO TO HOME
            </button>
        </div>
    )
}

export default Button
