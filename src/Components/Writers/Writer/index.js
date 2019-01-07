import React, {Fragment} from 'react'


export default ({ match, id, name, born, deceased, description, image }) =>
console.log(match)||
    <Fragment>
        <img src={image} alt={name} style={{maxWidth:240,maxHeight:380}}/>
        <h1>{name}</h1> 
        <h3>{born} &mdash {deceased}</h3>
        <p>{description}</p> 
    </Fragment>