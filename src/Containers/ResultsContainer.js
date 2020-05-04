import React from 'react';
import YearlyPremiumResults from '../Components/YearlyPremiumResults'
import MonthlyPremiumResults from '../Components/MonthlyPremiumResults'

class ResultsContainer extends React.Component {
    
    
    render(){

        if(this.props.timingQuestion==="year"){
            return (
                <div >
                    <YearlyPremiumResults
                        timingQuestion={this.props.timingQuestion}
                        modelWorkerBoolean={this.props.modelWorkerBoolean}
                        percentage={this.props.percentage}
                        premium={this.props.premium}
                        prices={this.props.prices} 
                        commoditiesSold={this.props.commoditiesSold}
                        premNoName={this.props.premNoName}
                        data={this.props.data}
                        />
    
                        
                    {/* <MonthlyPremiumResults /> */}
                </div>
            )
        } else{
            return (
                <div >
                    <MonthlyPremiumResults
                        timingQuestion={this.props.timingQuestion}
                        modelWorkerBoolean={this.props.modelWorkerBoolean}
                        percentage={this.props.percentage}
                        premium={this.props.premium}
                        prices={this.props.prices} 
                        commoditiesSold={this.props.commoditiesSold}
                        premNoName={this.props.premNoName}
                        data={this.props.data}
                        />
                </div>
            )
        }
        
    } 
}


export default ResultsContainer;