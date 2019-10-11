import React, { Component } from 'react';
import Pig from './Pig.js'

export default class Piglist extends Component {

    filterByName = (hogs) => {
        let newHogs = [...hogs]
        newHogs = newHogs.sort((a, b) => (
            a.name > b.name ? 1 : -1
        ));
        return newHogs
    }

    filterByWeight = (hogs) => {
        let chonkyHogs = [...hogs]
        chonkyHogs = chonkyHogs.sort((a, b) => (
            a.weight < b.weight ? -1 : 1
        ));
        return chonkyHogs
    }

    filterByGreased = (hogs) => {
        let greasedHogs = [...hogs]
        greasedHogs = greasedHogs.filter(function(hog) {
            return hog.greased === true
        })
        return greasedHogs
    }

    convertToImage = (name) => {
        let newName = name.toLowerCase()
        newName = newName.replace(/ /g, "_")
        return `${newName}`
    }

    sortAndFilterHogs = (hogs) => {
        let sortedHogs = [...hogs]
        sortedHogs = this.props.filter ? this.filterByGreased(this.props.hogs) : sortedHogs
        if (this.props.sort === "weight") {
            sortedHogs = this.filterByWeight(sortedHogs)
        } else if (this.props.sort === "name") {
            sortedHogs = this.filterByName(sortedHogs)
        } return sortedHogs
    }

    render() {
        // console.log(this.sortAndFilterHogs(this.props.hogs))
        let sortedHogs = this.sortAndFilterHogs(this.props.hogs)
        return(<div className="ui grid container">
            {sortedHogs.map((pig, index) => {
            return <Pig 
            key={index}
            name={pig.name}
            specialty={pig.specialty}
            greased={pig.greased}
            weight={pig.weight}
            medal={pig['highest medal achieved']}
            image={this.convertToImage(pig.name)}
            />

            })}</div>
        )
    }
}