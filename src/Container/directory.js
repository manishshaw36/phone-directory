import React, { Component } from 'react';
import './directory.css';
import AddSubscriber from '../Components/add_subscriber';
import EachSuscriber from '../Components/each_subscriber';

class Directory extends Component {
    state = {
        suscriber: [],
        addSubscriber: false,
    }

    handleAddSubscriberClick = () => {
        this.setState({ addSubscriber: !this.state.addSubscriber })
    }

    saveDataToParent = (data) => {
        this.setState({ suscriber: [...this.state.suscriber, {...data, id: this.state.suscriber.length} ], addSubscriber: false});
    }
    deleteData = (id) => {
        const { suscriber } = this.state;
        const updatedSubs = suscriber.filter((subs) => {
            return subs.id !== id;
        });
        debugger;
        this.setState({
            suscriber: updatedSubs,
            addSubscriber: false,
        })
    }

    render() {
        const { addSubscriber, suscriber } = this.state;
        return (
        <div className="directory">
            <header>
                <h1>Phone Directory</h1>
            </header>
            <section>
               <button className="addButton" onClick={this.handleAddSubscriberClick}>{addSubscriber ? 'Back' : 'Add'}</button>
               {
                    addSubscriber &&
                    <AddSubscriber 
                        saveDataToParent={this.saveDataToParent}
                    />
                } 
                {
                   suscriber.length !== 0 && 
                   
                   <table className="table-heading">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>
                }
                {
                   suscriber.length !== 0 && 
                   
                    suscriber.map((eve, index)=>{
                        return <EachSuscriber key={index} id={eve.id} subs={eve} deleteData={this.deleteData}/>
                    })
                }
            </section>
        </div>
        );
    }
}

export default Directory;
 