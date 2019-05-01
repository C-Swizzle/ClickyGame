import React, {Component} from "react";
import Card from "./Card";
import Col from "./Col";
import characters from "../characters.json";
class CardContainer extends Component {
state={
    clickedArray:[]
};

handleClick = event => {
    console.log(event);
};

render(){
    return (
        <>
        {characters.map(char =>{
            return (
                <Col>
                <Card image={char.image} name={char.name} id={char.id}
                onClick={this.handleClick}/>
                </Col>
            )
        })}

        
        </>
    );
}
};

export default CardContainer;