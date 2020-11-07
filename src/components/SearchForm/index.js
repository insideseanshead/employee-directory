import React, { Component } from 'react'

export default class index extends Component {
    
    state = {
        search: ""
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        
        this.setState({
            [name]: value
        })
    }

    
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
