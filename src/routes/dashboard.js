import React, { Component } from "react";
import Card from '../card'

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            number_of_cards: 1
        }
    }
    cardGenerator = () => {
        
    }
    render(){
        return(
            <div className="home">
                Dashboard
                <div className="card-container">
                    <Card key={1} number={1}/>
                    <Card key={2} number={2}/>
                    <Card key={3} number={3}/>
                    <Card key={4} number={4}/>
                </div>

            </div>
        )
    }
}

export default Dashboard;