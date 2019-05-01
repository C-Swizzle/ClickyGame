import React from "react";

function Card(props){
    const cardStyle={
        width:"18rem"
    }
    const imgStyle ={
        height: "15rem",
        width: "15rem"
    }
    return (
        <div className="card text-center border-2 border-primary rounded" style={cardStyle}>
            <img className="card-img-top ml-4" src={props.image} alt={props.name} style={imgStyle} />  
        </div>
    );
}

export default Card;