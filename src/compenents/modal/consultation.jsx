import React from 'react'
import './consul.css'
function Consultation() {
    return (

        <>
            <div className="consulta">
                <h1>Konsultatsiya</h1>
                <form action="">
                    <div class="input-field">
                        <input type="text" id="name" required />
                        <label for="name">Your name:</label>
                    </div>
                </form>
            </div>
        </>

    )
}

export default Consultation