import { useState } from "react"

export const Form = () => {
    const [username, setUsername] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Form data is ${username}`)
    }
    return <form onSubmit={handleSubmit}>
        <section className="formInputs">
            <label htmlFor="username">Username</label>
                <input type="text" 
                       id="username" 
                       value={username}
                       onChange={(event) => setUsername(event.target.value)}></input>
        </section>
        <button type="submit">Submit</button>
    </form>
}