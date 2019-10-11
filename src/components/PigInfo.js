import React, {Component} from 'react';


export default class PigInfo extends Component {
    render(){
        return(
            <div>
                <p>Specialty: {this.props.specialty}</p>
                <p>{this.props.greased ? "Greased" : "Ungreased" }</p>
                <p>Weight: {this.props.weight}</p>
                <p>Highest medal achieved: {this.props.medal}</p>
            </div>
        )
    }
}