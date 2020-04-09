import React from 'react';
import WeightTableRow from './WeightTableRow'


class WeightTable extends React.Component {

   
    renderWeightTable = () => {
        if(this.props.commoditiesSold){
            const comNameArray = this.props.commoditiesSold.map(comm => comm.label)
            return comNameArray.map(name => {
                return <WeightTableRow weightInput={this.props.weightInput} collectWeights={this.props.collectWeights} name={name} />
            })
        }
        
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