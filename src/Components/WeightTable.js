import React from 'react';
import WeightTableRow from './WeightTableRow'


class WeightTable extends React.Component {

    renderWeightTable = () => {
        const comNameArray = this.props.commoditiesSold.map(comm => comm.label)
        return comNameArray.map(name => {
            return <WeightTableRow collectWeights={this.props.collectWeights} name={name} />
        })
            // <WeightTableRow

        
    }

    
    
    render(){

        // console.log(this.props.commoditiesSold)
        return (
        

                <tbody>
                    {this.renderWeightTable()}
                </tbody>
    
            


        )
    } 
}


export default WeightTable;