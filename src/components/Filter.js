import React, {Component} from 'react';

export default class Filter extends Component {

    handleChange = (event) => {return this.props.updateSort(event.target.value)}

    render(){
        return (
            <div className="ui sixteen wide column">
                <select onChange={(event) => this.handleChange(event)}>
                    <option value="all">Show all</option>
                    <option value="name">Sort by name</option>
                    <option value="weight">Sort by weight</option>
                </select>
                Show only greased<input type="checkbox" onChange={this.props.updateGreased} />
            </div>
        )
    }
}