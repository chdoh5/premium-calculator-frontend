import React from 'react';


class WeightTableRow extends React.Component {
    
    
    render(){
        
        return (
            <tr>
            <td>{this.props.name}</td>
            <td>
        
            <div class="input-field inline">
                <input onChange={this.handleFoodbuyChange} class="right" type="number" />
            </div>
                <span>lbs</span>
            </td>
            </tr>


        )
    } 
}


export default WeightTableRow;