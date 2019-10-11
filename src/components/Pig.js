import React, { Component } from 'react';
import PigInfo from './PigInfo.js'

export default class Pig extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showInfo: false,
            hidden: false
        }
    };



    showData = () => {
        this.setState({showInfo: !(this.state.showInfo)})
        
    }

    hidePig = () => {
        this.setState({hidden: !(this.state.hidden)})
    }

    componentDidMount = () => {
        // console.log(this.props.image)
    }

    render() { 
        if (this.state.hidden === false) {
            return (
                    <div className="ui card four wide column">
                        <div className="image">
                        <img onClick={this.showData} src={require(`../hog-imgs/${this.props.image}.jpg`)} />
                        </div>
                            <div className="content">
                            < br />
                            <button onClick={this.hidePig}>bye chonk</button>
                                <div className="header">
                                <h2>{this.props.name}</h2>
                                </div>
                            {this.state.showInfo ? <PigInfo
                            specialty = {this.props.specialty}
                            greased = {this.props.greased}
                            weight = {this.props.weight}
                            medal = {this.props.medal}/> : null}
                            </div>
                        </div>
            )
        } else {
            return (
                <div className="ui card four wide column">
                <button onClick={this.hidePig}>come bacc, chonk. we miss u.</button>
                </div>
            )
            
        }
        
    }
    
}