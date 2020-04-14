import React from 'react';
import PremiumResults from '../Components/PremiumResults'
import WorkerResults from '../Components/WorkerResults'

class ResultsContainer extends React.Component {
    
    
    render(){
        return (
            <div >
                <PremiumResults
                    timingQuestion={this.props.timingQuestion}
                    modelWorkerBoolean={this.props.modelWorkerBoolean}
                    percentage={this.props.percentage}
                    premium={this.props.premium}
                    prices={this.props.prices} 
                    commoditiesSold={this.props.commoditiesSold}
                    premNoName={this.props.premNoName}
                    data={this.props.data}
                    />

                    
                <WorkerResults />
            </div>


        )
    } 
}


export default ResultsContainer;