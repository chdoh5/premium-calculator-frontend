import React from 'react';
import {numberFormat} from './NumberFormat'
import NumberFormat from 'react-number-format'


class WeightTableRow extends React.Component {



    render(){

        if(this.props.weightInput==="pounds") {
            return (
                <tr>
                <td>{this.props.name}</td>
                <td>
                <div class="input-field inline">
                
    
                    <NumberFormat thousandSeparator={true} isNumericString={true} onChange={(e)=> this.props.collectWeights(e, this.props.name)} class="right"   />
                   
                </div>
                
                    <span>lbs</span>
                </td>
                </tr>
            )

        }else {
            return (
                <tr>
                <td>{this.props.name}</td>
                <td>
                <div class="input-field inline">
                
    
                    <NumberFormat thousandSeparator={true} isNumericString={true} onChange={(e)=> this.props.collectWeights(e, this.props.name)} class="right"   />
                   
                </div>
                
                    <span>kg</span>
                </td>
                </tr>
            )
        }

    } 
}


export default WeightTableRow;