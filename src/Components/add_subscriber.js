import React, { Component } from 'react';

import './add_subscriber.css';

class AddSubscriber extends Component {
    state = {
        name: undefined,
        number: undefined
    }
    updateInputValue = (type) => (evt) => {
        const value = evt.target.value;
        var nameReg = /^[a-z]+$/i;
        var reg = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
        if (type === 'name' && value !== '' && !nameReg.test(value)) {
            return null;
        } 
        if (type === 'number' && value !== '' && !reg.test(value)) {
            return null;
        }
        this.setState({ [type]: evt.target.value })
    }

    saveData = () => {
        const data = {
            name: this.state.name, 
            number: this.state.number, 
        }
        if(data.name === null || data.name === undefined || data.number === undefined || data.number === null){
            alert("All fields are mandetory");
        } else if(data.number.length < 10){
            alert("Enter 10 Digit Phone Number");
        }
        else{
            this.props.saveDataToParent(data);
        }
    }
    render () {
        const { name, number } = this.state;
        return (
            <div className="add">
                <h2>Name:</h2>
                <input type="text" title="Enter your name" placeholder="Enter your name" value={name || ""} onChange={this.updateInputValue('name')}/>
                <h2>Phone:</h2>
                <input type="number" title="Enter 10 digit phone number" placeholder="Enter 10 digit phone number" value={number || ""} onChange={this.updateInputValue('number')}/>
                
                <div className="textCopy">
                    <h3>
                        Subscriber to be added:
                    </h3>
                    <h4>Name: {name}</h4>
                    <h4>Number: {number}</h4>
                </div>
                <button onClick={this.saveData}>ADD</button>
            </div>
        ); 
    }
} 
export default AddSubscriber; 