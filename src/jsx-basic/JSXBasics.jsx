import React from 'react'

function JSXBasics() {
    const name = "Rohit"
    const age = 33
    const isLoggedIn = true
    return (
        <div>
            <h1> Hello {name}</h1>
            <p> age: {age}</p>
            <p> status: {isLoggedIn ? "loged In" : "loged Out"}</p>
            <p> maths workd too {age * 2}</p>

        </div>
    )
}

export default JSXBasics
