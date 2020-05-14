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
                        yearlyWorkforce={this.props.yearlyWorkforce}
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
                        data={this.props.data}
                        jan={this.props.jan}
                        feb={this.props.feb}
                        mar={this.props.mar}
                        apr={this.props.apr}
                        may={this.props.may}
                        jun={this.props.jun}
                        jul={this.props.jul}
                        aug={this.props.aug}
                        sep={this.props.sep}
                        oct={this.props.oct}
                        nov={this.props.nov}
                        dec={this.props.dec}
                        />
                </div>
            )
        }
        
    } 
}


export default ResultsContainer;