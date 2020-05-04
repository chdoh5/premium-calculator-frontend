import React from 'react';
import YearlyWeightTableRow from './YearlyWeightTableRow'
import MonthlyTableRow from './MontlyTableRow'


class WeightTable extends React.Component {

   
    renderWeightTable = () => {
        if(this.props.commoditiesSold && this.props.timingQuestion === "year"){
            const comNameArray = this.props.commoditiesSold.map(comm => comm.label)
            return comNameArray.map(name => {
                return <YearlyWeightTableRow weightInput={this.props.weightInput} collectWeights={this.props.collectWeights} name={name} />
            })
        } else if(this.props.commoditiesSold && this.props.timingQuestion === "month"){
            const comNameArray = this.props.commoditiesSold.map(comm => comm.label)
            return comNameArray.map(name => {
                return <MonthlyTableRow weightInput={this.props.weightInput} collectWeights={this.props.collectWeights} name={name} />
            })
        }
        
    }

    
    
    render(){
        
        // console.log(this.props.commoditiesSold)
        return (
        

                <tbody >
                    {this.renderWeightTable()}
                </tbody>
    
            


        )
    } 
}


export default WeightTable;