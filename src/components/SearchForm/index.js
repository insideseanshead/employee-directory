import React, { Component } from 'react'

export default class Form extends Component {
    
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

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({
            search: ""
        })
    }
    
    render() {
        return (
            <div>
                <form className="form">
                    <input value={this.state.search} 
                    name="search"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Search Employee by last name"
                    />
                </form>
            </div>
        )
    }
}
