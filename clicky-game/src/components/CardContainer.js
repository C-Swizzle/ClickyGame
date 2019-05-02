import React, {Component} from "react";
import Card from "./Card";
import Col from "./Col";
import characters from "../characters.json";
import Header from "./Header";
import Container from "./Container";
import Row from "./Row";
class CardContainer extends Component {
state={
    clickedArray:[],
    characters: characters,
    score: 0
};

handleClick = event => {
    // console.log(event.target);
    const {id} = event.target;
    console.log(this.state.score);
    if(!this.state.clickedArray.includes(id)){
        this.setState({
            clickedArray: this.state.clickedArray.concat([id]),
            characters: this.shuffle(characters),
            score: this.state.score +1
        })
    } else {

        console.log("loser");
        this.setState({
            clickedArray: [],
            characters: this.shuffle(characters),
            score: 0
        })
    }
};
shuffle = arr => {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};
render(){
    return (
        <>
        <Header score={this.state.score}/>
        <Container>
        <Row>
        {this.state.characters.map(char =>{
            return (
                <Col>
                <Card image={char.image} name={char.name} id={char.id}
                onClick={this.handleClick} />
                </Col>
            )
        })}
        </Row>
        </Container >
        
        </>
    );
}
};

export default CardContainer;