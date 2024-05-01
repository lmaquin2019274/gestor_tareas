
import React from 'react'

// Styles


const DetailTask = ({ data }) => {

    const { name, description, date, user } = data

    return (
        <div>
            <h4><u>{ name }</u></h4>
            <p>{ description }</p>
            <p><i>{ date }</i></p>
            <p><u>{ user }</u></p>
        </div>
    )

}

export default DetailTask