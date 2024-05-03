
import React from 'react'

// Styles


const DetailTask = ({ data }) => {

    const { name, description, dateInicio, dateCierre, user } = data

    return (
        <div>
            <h4><u>{name}</u></h4>
            <p>{description}</p>
            <p><i>{dateInicio}</i></p>
            <p><i>{dateCierre}</i></p>
            <p><u>{user}</u></p>
        </div>
    )

}

export default DetailTask