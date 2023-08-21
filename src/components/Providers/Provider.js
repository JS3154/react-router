import React from "react";
import { useParams } from "react-router-dom"

const Provider = () => {
    const { id } = useParams()
    return (
        <section>
            <h1>Provider </h1>
            <h2>Provider {id === '1' ? 'Demo Hospital 1' : 'Demo Hospital 2'}</h2>
        </section>
    )
}

export default Provider;