import React, {Component} from 'react';

class List extends Component {
    constructor(props) {
        super(props);

    }

    removeItem(index){
        this.props.remove(index);
    }

    render() {
        return (
            <div>
                <ul>
                {this.props.items ? this.props.items.map((item, index) => {
                    return <li key={index}>{item} <button onClick={()=>this.removeItem(index)}>Remove</button></li>
                }): <p>No item in the list yet</p> }
                </ul>
            </div>
        );
    }
}

export default List;