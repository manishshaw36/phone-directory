import React, { Component } from 'react';
import "../Components/each_subscriber.css"

class EachSubscriber extends Component {
    deleteDataHandler = (id) => {
        this.props.deleteData(id);
    }
    render () {
        return (
            <table className="table_body">
                <tbody>
                    <tr>
                        <td>{this.props.subs.name}</td>
                        <td>{this.props.subs.number}</td>
                        <td><button onClick={() => this.deleteDataHandler(this.props.id)}>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        ); 
    }
}

export default EachSubscriber;  